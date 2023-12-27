import { Component, For, Show } from 'solid-js'
import styles from './Post.module.scss'
import Title from '~/components/Title'
import Label from '~/components/Label'
import PageRenderer from '~/components/PageRenderer'
import FormattedDate from '~/components/FormattedDate'
import ImageViewer from '~/components/ImageViewer'
import { createAsync, RouteSectionProps } from '@solidjs/router'
import { Meta } from '@solidjs/meta'
import { queryPostById } from '~/data/post.data'

const PostPage: Component<RouteSectionProps> = ({ params }) => {
  const data = createAsync(() => queryPostById(params.id))

  const searchLink = () => `/search?author=${encodeURIComponent(data()!.author.id)}`
  const images = () => data()?.images

  return (
    <>
      <Show when={!!data() && data()! !== null}>
        <Title title={data()!.title} />
        <Meta property="og:title" content={data()!.title} />
        <Meta property="og:description" content={data()!.description} />
        <Meta property="og:image" content={data()!.indexImage} />
        <Meta property="og:author" content={data()!.author.name} />
        <Meta property="og:type" content="article" />
        <Meta property="twitter:card" content="summary" />

        <article class={styles.container}>
          <div class={styles.header}>
            <div class={styles.labelContainer}>
              <For each={data()!.labels}>{(label) => <Label label={label} />}</For>
            </div>
            <h1 class={styles.title}>{data()!.title}</h1>
            <div class={styles.meta}>
              <Show when={data()!.author.image !== null}>
                <img class={styles.authorImage} src={data()!.author.image!} alt={data()!.author.name} />
              </Show>
              <a class={styles.author} href={searchLink()}>
                {data()!.author.name}
              </a>
              <span class={styles.dot} aria-hidden="true">
                •
              </span>
              <span class={styles.date}>
                Közzétéve: <FormattedDate date={new Date(data()!.date)} />
              </span>
            </div>
          </div>
          <img class={styles.indexImage} src={data()!.indexImage} alt="" />
          <PageRenderer content={data()!.content} />
          <Show when={images()!.length > 0}>
            <div class={styles.imageViewerContainer}>
              <ImageViewer images={images()!} />
            </div>
          </Show>
        </article>
      </Show>
    </>
  )
}

export default PostPage
