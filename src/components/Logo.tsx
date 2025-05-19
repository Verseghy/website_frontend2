import { A } from '@solidjs/router'
import type { VoidComponent } from 'solid-js'
import logo from '~/assets/icons/logo.svg'
import styles from './Logo.module.scss'

const Logo: VoidComponent = () => {
  return (
    <A href="/" class={styles.logo} tabindex="-1">
      <img src={logo} alt="Verseghy Ferenc Gimnázium címere" />
      <p>
        Verseghy <span>WEB</span>
      </p>
    </A>
  )
}

export default Logo
