import DOMPurify from 'dompurify'
import { Show, VoidComponent } from 'solid-js'
import { isServer } from 'solid-js/web'
import styles from './PageRenderer.module.scss'

let DOM: any
if (isServer) {
  DOM = (await import('jsdom')).JSDOM
}

type SanizerFn = (dirty: string) => string

const getSanitizer = (): SanizerFn => {
  if (isServer) {
    const window = new DOM('').window
    const purify = DOMPurify(window)

    return purify.sanitize
  } else {
    return DOMPurify.sanitize
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
      <div innerHTML={cleanHTML()} />
    </div>
  )
}

export default PageRenderer
