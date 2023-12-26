import { VoidComponent } from 'solid-js'
import hatartalanul from '/assets/banners/hatartalanul.jpg'
import ntp from '/assets/banners/ntp.png'
import bazis from '/assets/banners/bazisintezmeny_logo.png'
import styles from './Banners.module.scss'
import { A } from '@solidjs/router'

const Banners: VoidComponent = () => {
  return (
    <div class={styles.container}>
      <div class={styles.banners}>
        <A href="/pages/hatartalanul">
          <img src={hatartalanul} alt="Határtalanul" />
        </A>
        <A href="/pages/nemzeti-tehetseg-program">
          <img src={ntp} alt="Nemzeti Tehetség Program" height="160" />
        </A>
        <A href="/pages/bazisintezmeny">
          <img src={bazis} alt="Oktatási Hivatal Bázisintézménye" />
        </A>
      </div>
    </div>
  )
}

export default Banners
