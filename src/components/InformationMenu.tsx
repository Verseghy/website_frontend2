import { A } from '@solidjs/router'
import { For, Show, type VoidComponent } from 'solid-js'
import type { InternalOrExternalLinkMenuItem, MenuItem, PageLinkMenuItem } from '~/models/information'
import styles from './InformationMenu.module.scss'

export type InformationMenuProps = {
  menuItems: MenuItem[]
}

export const InformationMenu: VoidComponent<InformationMenuProps> = (props) => {
  return (
    <aside class={styles.menu}>
      <nav>
        <ul class={styles.dropdownContent}>
          <For each={props.menuItems}>
            {(item) => (
              <li>
                <InformationMenuSection item={item} />
              </li>
            )}
          </For>
        </ul>
      </nav>
    </aside>
  )
}

type InformationMenuSectionProps = {
  item: MenuItem
}

const InformationMenuSection: VoidComponent<InformationMenuSectionProps> = (props) => {
  return (
    <ul class={styles.section}>
      <span class={styles.sectionTitle}>{props.item.name}</span>
      <For each={props.item.children}>
        {(child) => (
          <li>
            <Show when={child.type === 'page_link'}>
              <PageLink child={child as PageLinkMenuItem} />
            </Show>
            <Show when={child.type !== 'page_link'}>
              <InternalOrExternalLink child={child as InternalOrExternalLinkMenuItem} />
            </Show>
          </li>
        )}
      </For>
    </ul>
  )
}

const PageLink: VoidComponent<{ child: PageLinkMenuItem }> = (props) => {
  const link = () => `/information/${props.child.slug}`

  return (
    <A href={link()} activeClass={styles.active}>
      {props.child.name}
    </A>
  )
}

const InternalOrExternalLink: VoidComponent<{ child: InternalOrExternalLinkMenuItem }> = (props) => {
  return (
    <A href={props.child.link}>
      {props.child.name} {'->'}
    </A>
  )
}
