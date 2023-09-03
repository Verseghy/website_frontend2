// @refresh reload
import { lazy, Suspense } from 'solid-js'
import { Body, ErrorBoundary, Head, Html, Meta, Route, Routes, Scripts, Title } from 'solid-start'

const HomePage = lazy(() => import('./pages/Home'))

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - Bare</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <Routes>
              <Route path="/" component={HomePage} />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  )
}
