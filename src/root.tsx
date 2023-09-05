// @refresh reload
import { lazy, ParentComponent, Suspense } from 'solid-js'
import { Body, ErrorBoundary, Head, Html, Meta, Route, Routes, Scripts, Title } from 'solid-start'
import 'normalize.css'
import '~/scss/global.scss'
import Footer from '~/components/Footer'
import styles from './root.module.scss'

const HomePage = lazy(() => import('~/pages/Home'))

const Layout: ParentComponent = (props) => {
  return (
    <div class={styles.layout}>
      <header></header>
      <main>{props.children}</main>
      <Footer />
    </div>
  )
}

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - Bare</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;700&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Body>
        <Layout>
          <Suspense>
            <ErrorBoundary>
              <Routes>
                <Route path="/" component={HomePage} />
              </Routes>
            </ErrorBoundary>
          </Suspense>
          <Scripts />
        </Layout>
      </Body>
    </Html>
  )
}
