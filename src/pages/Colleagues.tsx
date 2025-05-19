import { type RouteSectionProps, createAsync } from '@solidjs/router'
import { type Component, For, Show, type VoidComponent } from 'solid-js'
import Title from '~/components/Title'
import { queryColleaguesPage } from '~/data/colleagues.data'
import type { Category as CategoryModel, Colleague as ColleagueModel } from '~/models/colleague'
import styles from './Colleagues.module.scss'

type ColleagueProps = {
  colleague: ColleagueModel
}

const Colleague: VoidComponent<ColleagueProps> = (props) => {
  return (
    <div class={styles.colleague}>
      {/* <img src={colleague.image} alt={colleague.name} /> */}
      <img src={props.colleague.image} alt="" />
      <div>
        <p class={styles.name}>{props.colleague.name}</p>
        <p class={styles.subjects}>{props.colleague.subjects}</p>
        <p class={styles.jobs}>{props.colleague.jobs}</p>
        <p class={styles.roles}>{props.colleague.roles}</p>
        <p>{props.colleague.awards}</p>
      </div>
    </div>
  )
}

type CategoryProps = {
  category: CategoryModel
}

const Category: VoidComponent<CategoryProps> = (props) => {
  return (
    <section class={styles.category}>
      <h2>{props.category.name}</h2>
      <div class={styles.grid}>
        <For each={props.category.colleagues}>{(colleague) => <Colleague colleague={colleague} />}</For>
      </div>
    </section>
  )
}

const ColleaguesPage: Component<RouteSectionProps> = () => {
  const data = createAsync(() => queryColleaguesPage())

  return (
    <>
      <Title title="Munkatársak" />

      <Show when={data()}>
        <div class={styles.container}>
          <For each={data()}>{(category) => <Category category={category} />}</For>
        </div>
      </Show>
    </>
  )
}

export default ColleaguesPage
