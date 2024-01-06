import { Component } from 'solid-js'
import Banners from '~/components/Banners'
import CardGrid from '~/components/CardGrid'
import styles from './Home.module.scss'
import { Meta } from '@solidjs/meta'
import { createAsync, RouteSectionProps } from '@solidjs/router'
import { queryHomePage } from '~/data/home.data'

const HomePage: Component<RouteSectionProps> = () => {
  const data = createAsync(() => queryHomePage())

  return (
    <>
      <Meta name="twitter:card" content="summary" />

      <div class={styles.container}>
        <p>Legfrissebb hírek</p>
        <CardGrid posts={data()?.posts} />
        <Banners />
      </div>
    </>
  )
}

export default HomePage
