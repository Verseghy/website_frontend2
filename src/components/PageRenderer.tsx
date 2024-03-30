import { Show, VoidComponent } from 'solid-js'
import styles from './PageRenderer.module.scss'
import { getSanitizer } from '~/utils/sanitize'

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
