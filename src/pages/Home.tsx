import { VoidComponent } from 'solid-js'
import { Meta, useRouteData } from 'solid-start'
import Banners from '~/components/Banners'
import CardGrid from '~/components/CardGrid'
import { homeRouteData } from '~/state/home'
import previewImage from '/assets/preview_image.png'
import styles from './Home.module.scss'

const HomePage: VoidComponent = () => {
  const data = useRouteData<typeof homeRouteData>()

  return (
    <>
      <Meta name="og:site_name" content="Verseghy Ferenc Gimnázium" />
      <Meta name="og:type" content="website" />
      <Meta name="og:image" content={previewImage} />
      <Meta name="og:description" content="A szolnoki Verseghy Ferenc Gimnázium weboldala" />
      <Meta name="twitter:card" content="summary" />

      <div class={styles.container}>
        <CardGrid posts={data()} />
        <Banners />
      </div>
    </>
  )
}

export default HomePage
