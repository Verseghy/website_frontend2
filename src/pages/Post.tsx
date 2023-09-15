import { createEffect, createSignal, For, Show, VoidComponent } from 'solid-js'
import styles from './Post.module.scss'
import { createGraphQLClient, gql } from '@solid-primitives/graphql'
import { GRAPHQL_BACKEND_URL } from '~/constants'
import { Meta, useNavigate, useParams } from 'solid-start'
import { Post } from '~/models/post'
import Title from '~/components/Title'
import Label from '~/components/Label'
import PageRenderer from '~/components/PageRenderer'
import FormattedDate from '~/components/FormattedDate'

const QUERY = gql`
  query Post($id: Int!) {
    post(id: $id) {
      id,
      title,
      color,
      description,
      content,
      date,
      indexImage,
      images,
      author {
        id,
        name,
        description,
        image,
      }
      labels {
        id,
        color,
        name,
      }
    }
  }
`

type Response = {
  post: Post
}

const PostPage: VoidComponent = () => {
  // TODO: probably we can make this a global and reuse it everywhere
  const newQuery = createGraphQLClient(GRAPHQL_BACKEND_URL)
  const navigate = useNavigate()

  const params = useParams<{ id: string }>()
  const [queryParams, setQueryParams] = createSignal<false | { id: number }>(false)

  createEffect(() => {
    const parsed = Number(params.id)

    if (!Number.isSafeInteger(parsed)) {
      navigate('/404')
      return
    }

    setQueryParams({ id: parsed })
  })

  const [data] = newQuery<Response>(QUERY, queryParams)

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
        <Title>{data()!.post.title}</Title>
        <Meta property="og:title" content={data()!.post.title} />
        <Meta property="og:description" content={data()!.post.description} />
        <Meta property="og:image" content={data()!.post.indexImage} />
        <Meta property="og:author" content={data()!.post.author.name} />
        <Meta property="og:type" content="article" />

        <div class={styles.container}>
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
      </Show>
    </>
  )
}

export default PostPage
