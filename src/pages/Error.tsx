import { Meta } from '@solidjs/meta'
import { A } from '@solidjs/router'
import { Show, VoidComponent } from 'solid-js'
import Title from '~/components/Title'
import styles from './Error.module.scss'

export type ErrorPageProps = {
  status?: number
  title: string
  link?: {
    name: string
    href: string
  }
}

const ErrorPage: VoidComponent<ErrorPageProps> = (props) => {
  return (
    <>
      <Meta name="robots" content="noindex" />
      <Title title={props.title} />

      <div class={styles.container}>
        <div class={styles.center}>
          <Show when={!!props.status}>
            <h1>{props.status}</h1>
          </Show>
          <h2>{props.title}</h2>
          <Show when={!!props.link}>
            <A href={props.link!.href}>{props.link!.name}</A>
          </Show>
        </div>
      </div>
    </>
  )
}

export default ErrorPage
