import { A } from '@solidjs/router'
import type { VoidComponent } from 'solid-js'
import type { Label } from '~/models/post'
import styles from './Label.module.scss'

export type LabelProps = {
  label: Label
}

const LabelComponent: VoidComponent<LabelProps> = (props) => {
  return (
    <A
      href={`/search?label=${encodeURIComponent(props.label.id)}`}
      style={{ '--color': props.label.color }}
      class={styles.label}
    >
      {props.label.name}
    </A>
  )
}

export default LabelComponent
