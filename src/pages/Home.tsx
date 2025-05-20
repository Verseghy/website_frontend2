import { Meta } from '@solidjs/meta'
import { createAsync, type RouteSectionProps } from '@solidjs/router'
import { type Component, Show } from 'solid-js'
import Banners from '~/components/Banners'
import CardGrid from '~/components/CardGrid'
import { queryHomePage } from '~/data/home.data'
import styles from './Home.module.scss'

const HomePage: Component<RouteSectionProps> = () => {
  const data = createAsync(() => queryHomePage())

  return (
    <Show when={data()}>
      <Meta name="twitter:card" content="summary" />

      <div class={styles.container}>
        <p>Legfrissebb hírek</p>
        <CardGrid posts={data()!.posts} />
        <Banners />
      </div>
    </Show>
  )
}

export default HomePage
