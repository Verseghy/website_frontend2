import { createAsync, RouteSectionProps } from '@solidjs/router'
import { Component, For, Show, VoidComponent } from 'solid-js'
import { queryColleaguesPage } from '~/data/colleagues.data'
import styles from './Colleagues.module.scss'
import Title from '~/components/Title'
import { Category as CategoryModel, Colleague as ColleagueModel } from '~/models/colleague'

type ColleagueProps = {
  colleague: ColleagueModel
}

const Colleague: VoidComponent<ColleagueProps> = (props) => {
  const colleague = props.colleague

  return (
    <div class={styles.colleague}>
      {/* <img src={colleague.image} alt={colleague.name} /> */}
      <img src={colleague.image} alt="" />
      <div>
        <p class={styles.name}>{colleague.name}</p>
        <p class={styles.subjects}>{colleague.subjects}</p>
        <p class={styles.jobs}>{colleague.jobs}</p>
        <p class={styles.roles}>{colleague.roles}</p>
        <p>{colleague.awards}</p>
      </div>
    </div>
  )
}

type CategoryProps = {
  category: CategoryModel
}

const Category: VoidComponent<CategoryProps> = (props) => {
  const category = props.category

  return (
    <section class={styles.category}>
      <h2>{category.name}</h2>
      <div class={styles.grid}>
        <For each={category.colleagues}>{(colleague) => <Colleague colleague={colleague} />}</For>
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
