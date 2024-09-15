// @refresh reload

import { Meta, MetaProvider } from '@solidjs/meta'
import { RouteDefinition, Router } from '@solidjs/router'
import 'normalize.css'
import { ErrorBoundary, Suspense, lazy } from 'solid-js'
import previewImage from '~/assets/preview_image.png'
import Layout from '~/components/Layout'
import Title from '~/components/Title'
import '~/scss/global.scss'
import { loadHomePage } from './data/home.data'
import { loadPage } from './data/pages.data'
import { loadPost } from './data/post.data'
import { loadSearchPage } from './data/search.data'
import { loadInformationMenu } from './data/information.data'
import { loadColleaguesPage } from './data/colleagues.data'

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
    path: '/pages/:slug',
    component: lazy(() => import('~/pages/Pages')),
    load: loadPage,
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
        component: lazy(() =>
          import('~/pages/Search').then((c) => ({
            default: c.SearchPageRedirect,
          }))
        ),
        load: loadSearchPage,
      },
    ],
  },
  {
    path: '/canteen',
    component: lazy(() => import('~/pages/Canteen')),
  },
  {
    path: '/information',
    children: [
      {
        path: '/',
        component: lazy(() => import('~/pages/Information')),
      },
      {
        path: '/:slug',
        component: lazy(() =>
          import('~/pages/Information').then((c) => ({
            default: c.InformationPageWithSlug,
          }))
        ),
        load: loadPage,
      },
    ],
    load: loadInformationMenu,
  },
  {
    path: '/misc/colleagues',
    component: lazy(() => import('~/pages/Colleagues')),
    load: loadColleaguesPage,
  },
  {
    path: '/_debug',
    component: lazy(() => import('~/pages/Debug')),
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
          <Meta name="og:site_name" content="Verseghy Ferenc Gimnázium" />
          <Meta name="og:type" content="website" />
          <Meta name="og:locale" content="hu_HU" />
          <Meta name="og:description" content="A szolnoki Verseghy Ferenc Gimnázium weboldala" />
          <Meta name="og:image" content={previewImage} />

          <Router root={Layout}>{ROUTES}</Router>
        </ErrorBoundary>
      </Suspense>
    </MetaProvider>
  )
}
