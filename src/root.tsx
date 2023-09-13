// @refresh reload
import { lazy, Suspense } from 'solid-js'
import { Body, ErrorBoundary, Head, Html, Meta, Route, Routes, Scripts } from 'solid-start'
import 'normalize.css'
import '~/scss/global.scss'
import Layout from '~/components/Layout'
import Title from '~/components/Title'

const HomePage = lazy(() => import('~/pages/Home'))
const DebugPage = lazy(() => import('~/pages/Debug'))
const PostPage = lazy(() => import('~/pages/Post'))

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title />
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
                <Route path="/posts/:id" component={PostPage} />
                <Route path="/_debug" component={DebugPage} />
              </Routes>
            </ErrorBoundary>
          </Suspense>
          <Scripts />
        </Layout>
      </Body>
    </Html>
  )
}
