import { Show, type VoidComponent } from 'solid-js'
import { getSanitizer } from '~/utils/sanitize'
import styles from './PageRenderer.module.scss'

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
