import { Navigate, RouteSectionProps, createAsync } from '@solidjs/router'
import { Component, Show } from 'solid-js'
import CardGrid from '~/components/CardGrid'
import Title from '~/components/Title'
import { querySearchPage } from '~/data/search.data'
import styles from './Search.module.scss'

// eslint-disable-next-line solid/no-destructure
export const SearchPageRedirect: Component<RouteSectionProps> = ({ params }) => {
  const pathToNavigate = `/search?${encodeURIComponent(params.type)}=${encodeURIComponent(params.value)}`
  return <Navigate href={pathToNavigate} />
}

// eslint-disable-next-line solid/no-destructure
const SearchPage: Component<RouteSectionProps> = ({ location }) => {
  const data = createAsync(() => querySearchPage(location.query))

  return (
    <>
      <Title title="Keresés" />

      <div class={styles.container}>
        <Show when={!!location.query.term}>
          <h1 class={styles.title}>Találatok erre a kifejezésre: "{location.query.term}"</h1>
        </Show>
        <Show when={data()}>
          <Show when={data()!.length > 0}>
            <CardGrid posts={data()} />
          </Show>
          <Show when={data()!.length === 0}>
            <p>Nincs találat!</p>
          </Show>
        </Show>
      </div>
    </>
  )
}

export default SearchPage
