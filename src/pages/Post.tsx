import { createEffect, For, Show, VoidComponent } from 'solid-js'
import styles from './Post.module.scss'
import { Meta, useNavigate, useRouteData } from 'solid-start'
import Title from '~/components/Title'
import Label from '~/components/Label'
import PageRenderer from '~/components/PageRenderer'
import FormattedDate from '~/components/FormattedDate'
import { postRouteData } from '~/state/post'

const PostPage: VoidComponent = () => {
  const data = useRouteData<typeof postRouteData>()!
  const navigate = useNavigate()

  createEffect(() => {
    const d = data()

    if (d !== undefined && d.post === null) {
      // TODO: would be nice to not modify the url bar
      // if somebody made a typo for example then it is a lot more
      // easier to fix it when it is not modified
      navigate('/404')
    }
  })

  const searchLink = () => `/search/author/${data()!.post.author.id}`

  return (
    <>
      <Show when={!!data() && data()!.post !== null}>
        <Title title={data()!.post.title} />
        <Meta property="og:title" content={data()!.post.title} />
        <Meta property="og:description" content={data()!.post.description} />
        <Meta property="og:image" content={data()!.post.indexImage} />
        <Meta property="og:author" content={data()!.post.author.name} />
        <Meta property="og:type" content="article" />
        <Meta property="twitter:card" content="summary" />

        <div class={styles.container}>
          <div class={styles.header}>
            <div class={styles.labelContainer}>
              <For each={data()!.post.labels}>{(label) => <Label label={label} />}</For>
            </div>
            <h1 class={styles.title}>{data()!.post.title}</h1>
            <div class={styles.meta}>
              <Show when={data()!.post.author.image !== null}>
                <img class={styles.authorImage} src={data()!.post.author.image!} alt={data()!.post.author.name} />
              </Show>
              <a class={styles.author} href={searchLink()}>
                {data()!.post.author.name}
              </a>
              <span class={styles.dot}>•</span>
              <span class={styles.date}>
                Közzétéve: <FormattedDate date={new Date(data()!.post.date)} />
              </span>
            </div>
          </div>
          <img class={styles.indexImage} src={data()!.post.indexImage} alt="" />
          <PageRenderer content={data()!.post.content} />
        </div>
      </Show>
    </>
  )
}

export default PostPage
