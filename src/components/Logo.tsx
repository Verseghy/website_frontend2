import { A } from '@solidjs/router'
import type { VoidComponent } from 'solid-js'
import logo from '~/assets/icons/logo.svg'
import styles from './Logo.module.scss'

const Logo: VoidComponent<{ big?: boolean }> = (props) => {
  return (
    <A href="/" classList={{ [styles.logo]: true, [styles.big]: props.big }} tabindex="-1">
      <img src={logo} alt="Verseghy Ferenc Gimnázium címere" />
      <div class={styles.right}>
        <div class={styles.name}>
          <span class={styles.right}>Verseghy</span>
          <div class={styles.left}>
            <span class={styles.web}>WEB</span>
            <span class={styles.long}>{' '}Ferenc Gimnazium</span>
          </div>
        </div>
        <span class={styles.founded}>Alapítva: 1831</span>
      </div>
    </A>
  )
}

export default Logo
