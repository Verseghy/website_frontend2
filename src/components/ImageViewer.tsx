import { FaSolidChevronLeft } from 'solid-icons/fa'
import { Accessor, createSignal, For, VoidComponent } from 'solid-js'
import styles from './ImageViewer.module.scss'

export type ImageViewerProps = {
  images: string[]
}

const ImageViewer: VoidComponent<ImageViewerProps> = (props) => {
  const [activeIndex, setActiveIndex] = createSignal(0)

  const onClickLeft = () => {
    setActiveIndex((i) => {
      if (i === 0) return props.images.length - 1
      return i - 1
    })
  }

  const onClickRight = () => {
    setActiveIndex((i) => (i + 1) % props.images.length)
  }

  const left = (index: Accessor<number>) => {
    if (activeIndex() > index()) {
      return -100
    } else if (activeIndex() < index()) {
      return 100
    }
    return 0
  }

  return (
    <div class={styles.viewer}>
      <For each={props.images}>
        {(image, index) => {
          return (
            <img
              src={image}
              alt=""
              style={{
                left: `${left(index)}%`,
              }}
            />
          )
        }}
      </For>

      <div class={styles.left} onClick={onClickLeft}>
        <FaSolidChevronLeft size="4rem" />
      </div>
      <div class={styles.right} onClick={onClickRight}>
        <FaSolidChevronLeft size="4rem" />
      </div>
    </div>
  )
}

export default ImageViewer
