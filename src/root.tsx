// @refresh reload
import { lazy, Suspense } from 'solid-js'
import { Body, ErrorBoundary, Head, Html, Meta, Scripts, useRoutes } from 'solid-start'
import 'normalize.css'
import '~/scss/global.scss'
import Layout from '~/components/Layout'
import Title from '~/components/Title'
import { RouteDefinition } from '@solidjs/router'
import { postRouteData } from './state/post'
import { HydrationScript } from 'solid-js/web'
import StateProvider from './state/StateProvider'
import { homeRouteData } from './state/home'

const ROUTES: RouteDefinition[] = [
  {
    path: '/posts/:id',
    component: lazy(() => import('~/pages/Post')),
    data: postRouteData,
  },
  {
    path: '/_debug',
    component: lazy(() => import('~/pages/Debug')),
  },
  {
    path: '/',
    component: lazy(() => import('~/pages/Home')),
    data: homeRouteData,
  },
  {
    path: '/*all',
    component: () => {
      const Error = lazy(() => import('~/pages/Error'))
      return (
        <Error
          status={404}
          title="Az oldal nem található"
          link={{
            name: 'Vissza a főoldalra',
            href: '/',
          }}
        />
      )
    },
  },
]

export default function Root() {
  const Routes = useRoutes(ROUTES)

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
        <HydrationScript />
      </Head>
      <Body>
        <StateProvider>
          <Layout>
            <Suspense>
              <ErrorBoundary>
                <Routes />
              </ErrorBoundary>
            </Suspense>
            <Scripts />
          </Layout>
        </StateProvider>
      </Body>
    </Html>
  )
}
