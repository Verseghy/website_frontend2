// @refresh reload

import { Meta, MetaProvider } from '@solidjs/meta'
import 'modern-normalize/modern-normalize.css'
import { type RouteDefinition, Router } from '@solidjs/router'
import { ErrorBoundary, lazy, Suspense } from 'solid-js'
import previewImage from '~/assets/preview_image.png'
import Layout from '~/components/Layout'
import Title from '~/components/Title'
import '~/scss/global.scss'
import { loadCanteenPage } from './data/canteen.data'
import { loadColleaguesPage } from './data/colleagues.data'
import { loadHomePage } from './data/home.data'
import { loadInformationMenu } from './data/information.data'
import { loadPage } from './data/pages.data'
import { loadPost } from './data/post.data'
import { loadSearchPage } from './data/search.data'

const ROUTES: RouteDefinition[] = [
  {
    path: '/posts/:id',
    matchFilters: {
      id: (id: string) => Number.isSafeInteger(Number.parseInt(id)),
    },
    component: lazy(() => import('~/pages/Post')),
    preload: loadPost,
  },
  {
    path: '/pages/:slug',
    component: lazy(() => import('~/pages/Pages')),
    preload: loadPage,
  },
  {
    path: '/search',
    children: [
      {
        path: '/',
        component: lazy(() => import('~/pages/Search')),
        preload: loadSearchPage,
      },
      {
        // We need to keep this for backwards compatibility reasons
        path: '/:type/:value',
        component: lazy(() =>
          import('~/pages/Search').then((c) => ({
            default: c.SearchPageRedirect,
          }))
        ),
        preload: loadSearchPage,
      },
    ],
  },
  {
    path: '/canteen',
    component: lazy(() => import('~/pages/Canteen')),
    preload: loadCanteenPage,
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
        preload: loadPage,
      },
    ],
    preload: loadInformationMenu,
  },
  {
    path: '/misc/colleagues',
    component: lazy(() => import('~/pages/Colleagues')),
    preload: loadColleaguesPage,
  },
  {
    path: '/_debug',
    component: lazy(() => import('~/pages/Debug')),
  },
  {
    path: '/',
    component: lazy(() => import('~/pages/Home')),
    preload: loadHomePage,
  },
  {
    path: '/*',
    component: () => {
      const ErrorPage = lazy(() => import('~/pages/Error'))

      return (
        <ErrorPage
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
