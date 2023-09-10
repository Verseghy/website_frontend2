import { ParentComponent } from "solid-js"
import Footer from "./Footer"
import styles from './Layout.module.scss'

const Layout: ParentComponent = (props) => {
  return (
    <div class={styles.layout}>
      <header></header>
      <main class={styles.main}>{props.children}</main>
      <Footer />
    </div>
  )
}

export default Layout
