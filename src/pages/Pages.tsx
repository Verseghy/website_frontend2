import { Meta, Title } from '@solidjs/meta'
import { createAsync, RouteSectionProps } from '@solidjs/router'
import { Component, Show } from 'solid-js'
import PageRenderer from '~/components/PageRenderer'
import { queryPageByID } from '~/data/pages.data'
import styles from './Pages.module.scss'

// eslint-disable-next-line solid/no-destructure
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
