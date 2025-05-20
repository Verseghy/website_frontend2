import { Navigate, type RouteSectionProps, createAsync } from '@solidjs/router'
import { type Component, Show } from 'solid-js'
import { InformationMenu } from '~/components/InformationMenu'
import PageRenderer from '~/components/PageRenderer'
import { queryInformationMenu } from '~/data/information.data'
import { queryPageByID } from '~/data/pages.data'
import type { MenuItem } from '~/models/information'
import styles from './Information.module.scss'

const InformationPage: Component<RouteSectionProps> = (props) => {
  const data = createAsync(() => queryInformationMenu())

  const href = (data: MenuItem[]) => {
    for (const item of data) {
      if (item.type === 'page_link') {
        return `${props.location.pathname}/${encodeURIComponent(item.slug)}`
      }
    }

    console.error('No `page_link` type item in menu')

    return 'error'
  }

  return <Show when={data()}>{(data) => <Navigate href={href(data())} />}</Show>
}

export default InformationPage

export const InformationPageWithSlug: Component<RouteSectionProps> = (props) => {
  const menu = createAsync(() => queryInformationMenu())
  const page = createAsync(() => queryPageByID(props.params.slug))

  return (
    <div class={styles.container}>
      <Show when={menu()}>{(menu) => <InformationMenu menuItems={menu()} />}</Show>
      <Show when={page()}>{(page) => <PageRenderer title={page().title} content={page().content} />}</Show>
    </div>
  )
}
