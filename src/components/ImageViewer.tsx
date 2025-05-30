import { FaSolidChevronLeft } from 'solid-icons/fa'
import { createEffect, createSignal, For, on, onMount, untrack, type VoidComponent } from 'solid-js'
import styles from './ImageViewer.module.scss'

export type ImageViewerProps = {
  images: string[]
}

const ImageViewer: VoidComponent<ImageViewerProps> = (props) => {
  let scroller: HTMLDivElement | undefined
  let observer: IntersectionObserver
  let elements: HTMLElement[] = []

  const [activeIndex, setActiveIndex] = createSignal(0)
  const [filteredSources, setFilteredSources] = createSignal<string[]>([])

  const images = () => {
    const filtered = filteredSources()
    return props.images.filter((img) => !filtered.includes(img))
  }

  const scroll = () => {
    untrack(() => {
      const target = elements[activeIndex()]
      const delta = Math.abs(scroller!.offsetLeft - target.offsetLeft)
      scroller!.scrollTo(delta, 0)
    })
  }

  const onClickLeft = () => {
    setActiveIndex((i) => Math.min(i - 1, images().length - 1))
    scroll()
  }

  const onClickRight = () => {
    setActiveIndex((i) => Math.max(i + 1, 0))
    scroll()
  }

  onMount(() => {
    observer = new IntersectionObserver(
      (entries) => {
        const intersectingEntries = entries.filter((e) => e.isIntersecting)

        if (intersectingEntries.length > 0) {
          const target = intersectingEntries[0].target
          untrack(() => {
            setActiveIndex(elements.indexOf(target as HTMLElement))
          })
        }
      },
      {
        root: scroller,
        threshold: 0.5,
      }
    )
  })

  const onError = (event: Event) => {
    const img = event.target as HTMLImageElement
    setFilteredSources((srcs) => [...srcs, img.src])
    console.error('Filtered out source:', img.src)
  }

  createEffect(
    on([() => images()], () => {
      observer.disconnect()
      elements = Array.from(scroller!.querySelectorAll('figure'))
      elements.forEach((e) => observer.observe(e))
    })
  )

  return (
    <section aria-label="Galéria" class={styles.viewer}>
      <button
        type="button"
        class={styles.left}
        onClick={onClickLeft}
        title="Előző kép"
        aria-label="Előző kép"
        disabled={activeIndex() === 0}
      >
        <FaSolidChevronLeft size="4rem" aria-hidden="true" />
      </button>
      <button
        type="button"
        class={styles.right}
        onClick={onClickRight}
        title="Következő kép"
        aria-label="Következő kép"
        disabled={activeIndex() === images().length - 1}
      >
        <FaSolidChevronLeft size="4rem" aria-hidden="true" />
      </button>

      {/* biome-ignore lint/a11y/useSemanticElements: it isn't appropriate to use a <fieldset> here */}
      <div class={styles.scroller} role="group" aria-label="Képek" aria-live="polite" ref={scroller}>
        <For each={images()}>
          {(image, index) => {
            const label = () => `${index() + 1}/${images().length}`

            return (
              <figure aria-label={label()} aria-roledescription="item" inert={index() !== activeIndex()}>
                <img
                  src={image}
                  alt={label()}
                  loading="lazy"
                  fetchpriority={index() === 0 ? 'high' : 'low'}
                  onError={onError}
                />
              </figure>
            )
          }}
        </For>
      </div>
    </section>
  )
}

export default ImageViewer
