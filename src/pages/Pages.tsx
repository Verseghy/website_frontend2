import { Meta } from '@solidjs/meta'
import { createAsync, type RouteSectionProps } from '@solidjs/router'
import { type Component, Show } from 'solid-js'
import PageRenderer from '~/components/PageRenderer'
import Title from '~/components/Title'
import { queryPageByID } from '~/data/pages.data'
import styles from './Pages.module.scss'

const PagesPage: Component<RouteSectionProps> = ({ params }) => {
  const data = createAsync(() => queryPageByID(params.slug), {
    deferStream: true,
  })

  return (
    <Show when={!!data()}>
      <Title title={data()!.title} />
      <Meta property="og:title" content={data()!.title} />

      <div class={styles.container}>
        <PageRenderer title={data()!.title} content={data()!.content} />
      </div>
    </Show>
  )
}

export default PagesPage
