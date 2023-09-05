import { VoidComponent } from 'solid-js'
import { VERSION } from '~/constants'
import styles from './Footer.module.scss'
import { FaBrandsFacebookF } from 'solid-icons/fa'
import Logo from './Logo'
import kk from '/assets/icons/kk-logo.jpg'
import kreta from '/assets/icons/kreta.png'
import eugy from '/assets/icons/eugy.png'
import { A } from 'solid-start'

const Footer: VoidComponent = () => {
  return (
    <footer>
      <div class={styles.container}>
        <div class={styles.top}>
          <div class={styles.logoContainer}>
            <Logo />
            <A href="https://kk.gov.hu/szolnok" target="_blank" rel="noopener noreferrer">
              <img class={styles.kkLogo} src={kk} alt="Szolnoki Tankerületi Központ logója" />
            </A>
          </div>
          <div class={styles.block}>
            <h4>Rólunk</h4>
            <span>5000 Szolnok, Tisza park 1.</span>
            <span>Telefon: 56/514-953; 20/540-4896</span>
            <A href="mailto: verseghygimnazium@gmail.com">E-mail: verseghygimnazium@gmail.com</A>
            <span>OM azonosító: 035992</span>
            <span>Honlap verzió: {VERSION}</span>
          </div>
          <div class={styles.block}>
            <h4>Linkek</h4>
            <A href="/archive">Archívum</A>
            <A href="." class={styles.disabled} tabIndex={-1}>
              Impresszum
            </A>
            <A href="." class={styles.disabled} tabIndex={-1}>
              Oldaltérkép
            </A>
          </div>
          <div class={styles.block}>
            <h4>KRÉTA</h4>
            <A href="https://klik035992001.e-kreta.hu/Adminisztracio/Login" target="_blank" rel="noopener noreferrer">
              <img alt="" src={kreta} />
            </A>
            <A href="https://eugyintezes.e-kreta.hu/" target="_blank" rel="noopener noreferrer">
              <img alt="" src={eugy} />
            </A>
          </div>
        </div>
      </div>
      <div class={styles.bottom}>
        <div class={styles.container}>
          <span>
            Honlap észrevételek, visszajelzések:{' '}
            <A href="mailto:contact@zoltanszepesi.com">contact@zoltanszepesi.com</A>
          </span>
          <div class={styles.right}>
            {/* TODO: facebook link */}
            <A href=".">
              <FaBrandsFacebookF />
            </A>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
