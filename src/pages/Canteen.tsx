import { RouteSectionProps, createAsync } from '@solidjs/router'
import { Component, For, Show, VoidComponent } from 'solid-js'
import { queryCanteen } from '~/data/canteen.data'
import { Day } from '~/models/canteen'
import styles from './Canteen.module.scss'

const DAYS = ['Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek']

type CanteenWeekProps = {
  title: string
  days: Day[]
}

const CanteenWeek: VoidComponent<CanteenWeekProps> = (props) => {
  const dataWithDays = () =>
    DAYS.map((d, i) => ({
      day: d,
      menus: props.days[i]?.menus ?? [],
    }))

  return (
    <section>
      <h2>{props.title}</h2>
      <ul>
        <For each={dataWithDays()}>
          {(day) => (
            <li>
              <span>{day.day}</span>
              <ul>
                <Show when={(day.menus.length as number) === 0}>
                  <li>Nincs megadva</li>
                </Show>
                <For each={day.menus}>
                  {(menu) => (
                    <Show when={menu}>
                      <li>{menu!.menu}</li>
                    </Show>
                  )}
                </For>
              </ul>
            </li>
          )}
        </For>
      </ul>
    </section>
  )
}

const CanteenPage: Component<RouteSectionProps> = () => {
  const data = createAsync(() => queryCanteen())

  return (
    <>
      <div class={styles.container}>
        <h1>Menza étlap</h1>

        <div class={styles.columns}>
          <Show when={data()}>
            <CanteenWeek title="Heti menü" days={data()![0]} />
            <CanteenWeek title="Jövő heti menü" days={data()![1]} />
          </Show>
        </div>
      </div>
    </>
  )
}

export default CanteenPage
