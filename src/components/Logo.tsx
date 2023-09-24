import { VoidComponent } from 'solid-js'
import { A } from 'solid-start'
import styles from './Logo.module.scss'
import logo from '/assets/icons/logo.svg'

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
