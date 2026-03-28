import { Meta } from '@solidjs/meta'
import { createAsync, type RouteSectionProps } from '@solidjs/router'
import { type Component, For, Show } from 'solid-js'
import FormattedDate, { formatMachineReadableDate } from '~/components/FormattedDate'
import ImageViewer from '~/components/ImageViewer'
import Label from '~/components/Label'
import PageRenderer from '~/components/PageRenderer'
import Title from '~/components/Title'
import { queryPostById } from '~/data/post.data'
import styles from './Post.module.scss'

const PostPage: Component<RouteSectionProps> = ({ params }) => {
  const data = createAsync(() => queryPostById(params.id!), {
    deferStream: true,
  })

  return (
    <Show when={data()}>
      {(data) => (
        <>
          <Title title={data().title} />
          <Meta property="og:title" content={data().title} />
          <Meta property="og:description" content={data().description} />
          <Meta property="og:image" content={data().indexImage} />
          <Show when={data().author}>{(author) => <Meta property="og:author" content={author().name} />}</Show>
          <Meta property="og:type" content="article" />
          <Meta property="article:published_time" content={formatMachineReadableDate(new Date(data().date))} />
          <Meta property="twitter:card" content="summary" />

          <article class={styles.container}>
            <div class={styles.header}>
              <div class={styles.labelContainer}>
                <For each={data().labels}>{(label) => <Label label={label} />}</For>
              </div>
              <h1 class={styles.title}>{data().title}</h1>
              <div class={styles.meta}>
                <Show when={data().author}>
                  {(author) => (
                    <>
                      <Show when={author().image}>
                        {(image) => <img class={styles.authorImage} src={image()} alt={author().name} />}
                      </Show>
                      <a class={styles.author} href={`/search?author=${encodeURIComponent(author().id)}`}>
                        {author().name}
                      </a>
                      <span class={styles.dot} aria-hidden="true">
                        •
                      </span>
                    </>
                  )}
                </Show>
                <span class={styles.date}>
                  Közzétéve: <FormattedDate date={new Date(data().date)} />
                </span>
              </div>
            </div>
            <img class={styles.indexImage} src={data().indexImage} alt="" />
            <PageRenderer content={data().content} />
            <Show when={data().images.length > 0}>
              <div class={styles.imageViewerContainer}>
                <ImageViewer images={data().images} />
              </div>
            </Show>
          </article>
        </>
      )}
    </Show>
  )
}

export default PostPage
