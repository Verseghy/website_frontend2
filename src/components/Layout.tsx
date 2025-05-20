import type { ParentComponent } from 'solid-js'
import Footer from './Footer'
import Header from './Header'
import styles from './Layout.module.scss'

const Layout: ParentComponent = (props) => {
  let ref: HTMLElement | undefined

  const skipNav = () => {
    ref?.focus()
  }

  return (
    <>
      <button type="button" onClick={skipNav} class={styles.skipToMain} aria-label="Navigáció átugrása">
        <span>Navigáció átugrása</span>
      </button>
      <div class={styles.layout}>
        <Header />
        <main ref={ref} tabindex="-1" class={styles.main}>
          {props.children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
