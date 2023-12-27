// @refresh reload

import { ErrorBoundary, lazy, Suspense } from 'solid-js'
import 'normalize.css'
import '~/scss/global.scss'
import Layout from '~/components/Layout'
import Title from '~/components/Title'
import { RouteDefinition, Router } from '@solidjs/router'
import { MetaProvider } from '@solidjs/meta'
import { loadHomePage } from './data/home.data'
import { loadPost } from './data/post.data'
import { loadSearchPage } from './data/search.data'

const ROUTES: RouteDefinition[] = [
  {
    path: '/posts/:id',
    matchFilters: {
      id: (id: string) => Number.isSafeInteger(parseInt(id)),
    },
    component: lazy(() => import('~/pages/Post')),
    load: loadPost,
  },
  {
    path: '/_debug',
    component: lazy(() => import('~/pages/Debug')),
  },
  {
    path: '/search',
    children: [
      {
        path: '/',
        component: lazy(() => import('~/pages/Search')),
        load: loadSearchPage,
      },
      {
        path: '/:type/:value',
        component: lazy(() => import('~/pages/Search').then((c) => ({ default: c.SearchPageRedirect }))),
        load: loadSearchPage,
      },
    ],
  },
  {
    path: '/',
    component: lazy(() => import('~/pages/Home')),
    load: loadHomePage,
  },
  {
    path: '/*',
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

export default function App() {
  return (
    <MetaProvider>
      <Suspense>
        <ErrorBoundary fallback={() => null}>
          <Title />
          <Router root={Layout}>{ROUTES}</Router>
        </ErrorBoundary>
      </Suspense>
    </MetaProvider>
  )
}
