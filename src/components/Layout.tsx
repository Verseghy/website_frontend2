import { ParentComponent } from 'solid-js'
import Footer from './Footer'
import Header from './Header'
import styles from './Layout.module.scss'

const Layout: ParentComponent = (props) => {
  let ref: HTMLElement | undefined

  const skipNav = () => {
    console.log('skip nav', ref)
    ref?.focus()
  }

  return (
    <>
      <button onClick={skipNav} class={styles.skipToMain} aria-label="Navigáció átugrása">
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
