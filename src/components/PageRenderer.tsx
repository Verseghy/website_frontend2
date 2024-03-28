import DOMPurify from 'dompurify'
import { Show, VoidComponent } from 'solid-js'
import { isServer } from 'solid-js/web'
import { IMAGE_ORIGIN } from '~/constants'
import styles from './PageRenderer.module.scss'

const imageOrigin = new URL(IMAGE_ORIGIN)

const fixURLOrigin = (dom: Document) => {
  const images = dom.getElementsByTagName('img')

  for (const img of images) {
    const url = new URL(img.src)

    url.protocol = imageOrigin.protocol
    url.host = imageOrigin.host
    url.port = imageOrigin.port

    img.src = url.href
  }
}

type SanizerFn = (dirty: string) => string

const getSanitizer = (): SanizerFn => {
  if (isServer) {
    // TODO: fix server side html sanitization
    return (x) => x
  } else {
    return (dirty) => {
      const parser = new DOMParser()
      const dom = parser.parseFromString(dirty, 'text/html')

      fixURLOrigin(dom)

      const clean = DOMPurify.sanitize(dom.body, {
        ADD_TAGS: ['iframe'],
      })

      return clean
    }
  }
}

export type PageRendererProps = {
  title?: string
  content: string
}

const PageRenderer: VoidComponent<PageRendererProps> = (props) => {
  const sanitizer = getSanitizer()

  const cleanHTML = () => sanitizer(props.content)

  return (
    <div class={styles.content}>
      <Show when={!!props.title}>
        <h1 class={styles.title}>{props.title}</h1>
      </Show>
      {/* eslint-disable-next-line solid/no-innerhtml */}
      <div innerHTML={cleanHTML()} />
    </div>
  )
}

export default PageRenderer
