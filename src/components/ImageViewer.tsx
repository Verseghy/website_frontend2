import { FaSolidChevronLeft } from 'solid-icons/fa'
import { createEffect, on, createSignal, For, onMount, VoidComponent, untrack } from 'solid-js'
import styles from './ImageViewer.module.scss'

export type ImageViewerProps = {
  images: string[]
}

const ImageViewer: VoidComponent<ImageViewerProps> = (props) => {
  let scroller: HTMLDivElement | undefined
  let observer: IntersectionObserver
  let elements: HTMLElement[] = []

  const [activeIndex, setActiveIndex] = createSignal(0)

  const scroll = () => {
    untrack(() => {
      const target = elements[activeIndex()]
      const delta = Math.abs(scroller!.offsetLeft - target.offsetLeft)
      scroller!.scrollTo(delta, 0)
    })
  }

  const onClickLeft = () => {
    setActiveIndex((i) => Math.min(i - 1, props.images.length - 1))
    scroll()
  }

  const onClickRight = () => {
    setActiveIndex((i) => Math.max(i + 1, 0))
    scroll()
  }

  onMount(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries = entries.filter((e) => e.isIntersecting)

        if (entries.length > 0) {
          const target = entries[0].target
          untrack(() => {
            setActiveIndex(elements.indexOf(target))
          })
        }
      },
      {
        root: scroller,
        threshold: 0.5,
      }
    )
  })

  createEffect(
    on([() => props.images], () => {
      elements.forEach((e) => observer.unobserve(e))
      elements = Array.from(scroller!.querySelectorAll('figure'))
      elements.forEach((e) => observer.observe(e))
    })
  )

  return (
    <div aria-label="Képek">
      <div class={styles.viewer}>
        <button
          class={styles.left}
          onClick={onClickLeft}
          title="Előző kép"
          aria-label="Előző kép"
          disabled={activeIndex() == 0}
        >
          <FaSolidChevronLeft size="4rem" aria-hidden="true" />
        </button>
        <button
          class={styles.right}
          onClick={onClickRight}
          title="Következő kép"
          aria-label="Következő kép"
          disabled={activeIndex() == props.images.length - 1}
        >
          <FaSolidChevronLeft size="4rem" aria-hidden="true" />
        </button>

        <div class={styles.scroller} role="group" aria-label="Képnézegető" aria-live="polite" ref={scroller}>
          <For each={props.images}>
            {(image, index) => {
              const label = () => `${index() + 1}/${props.images.length}`

              return (
                <figure aria-label={label()} aria-roledescription="item" inert={index() != activeIndex()}>
                  <img src={image} alt={label()} loading="lazy" />
                </figure>
              )
            }}
          </For>
        </div>
      </div>
    </div>
  )
}

export default ImageViewer
