import { createAsync, Navigate, type RouteSectionProps } from '@solidjs/router'
import { type Component, Show } from 'solid-js'
import CardGrid from '~/components/CardGrid'
import Title from '~/components/Title'
import { querySearchPage } from '~/data/search.data'
import styles from './Search.module.scss'

export const SearchPageRedirect: Component<RouteSectionProps> = (props) => {
  const pathToNavigate = `/search?${encodeURIComponent(props.params.type)}=${encodeURIComponent(props.params.value)}`
  return <Navigate href={pathToNavigate} />
}

const SearchPage: Component<RouteSectionProps> = (props) => {
  const data = createAsync(() => querySearchPage(props.location.query))

  return (
    <>
      <Title title="Keresés" />

      <div class={styles.container}>
        <Show when={!!props.location.query.term}>
          <h1 class={styles.title}>Találatok erre a kifejezésre: "{props.location.query.term}"</h1>
        </Show>
        <Show when={data()}>
          <Show when={data()!.length > 0}>
            <CardGrid posts={data()!} />
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
