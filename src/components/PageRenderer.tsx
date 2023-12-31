import DOMPurify from 'dompurify'
import { Show, VoidComponent } from 'solid-js'
import { isServer } from 'solid-js/web'
import styles from './PageRenderer.module.scss'

/* let DOM: any */
/* if (isServer) { */
/*   DOM = (await import('jsdom')).JSDOM */
/* } */

type SanizerFn = (dirty: string) => string

const getSanitizer = (): SanizerFn => {
  if (isServer) {
    /* const window = new DOM('').window */
    /* const window = new DOM.Window() */
    /* const purify = DOMPurify(window) */
    /* return purify.sanitize */
    // TODO: fix server side html sanitization
    return (x) => x
  } else {
    return (dirty) =>
      DOMPurify.sanitize(dirty, {
        ADD_TAGS: ['iframe'],
      })
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
