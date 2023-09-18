import { ParentComponent } from 'solid-js'
import Footer from './Footer'
import Header from './Header'
import styles from './Layout.module.scss'

const Layout: ParentComponent = (props) => {
  return (
    <div class={styles.layout}>
      <Header />
      <main class={styles.main}>{props.children}</main>
      <Footer />
    </div>
  )
}

export default Layout
