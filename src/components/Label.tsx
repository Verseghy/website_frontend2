import { A } from '@solidjs/router'
import Color from 'color'
import { VoidComponent } from 'solid-js'
import { Label } from '~/models/post'
import styles from './Label.module.scss'

export type LabelProps = {
  label: Label
}

const LabelComponent: VoidComponent<LabelProps> = (props) => {
  return (
    <A
      href={`/search?label=${encodeURIComponent(props.label.id)}`}
      style={{ 'background-color': props.label.color }}
      classList={{
        [styles.label]: true,
        [styles.dark]: Color(props.label.color).isDark(),
      }}
    >
      {props.label.name}
    </A>
  )
}

export default LabelComponent
