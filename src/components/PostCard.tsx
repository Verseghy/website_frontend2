import { A } from '@solidjs/router'
import Color from 'color'
import { isSameYear, format } from 'date-fns'
import { hu } from 'date-fns/locale'
import { For, Show, VoidComponent } from 'solid-js'
import { Author, Post } from '~/models/post'
import Label from './Label'
import styles from './PostCard.module.scss'

const formatDate = (date: Date): string => {
  if (isSameYear(new Date(), date)) {
    return format(date, 'MMM dd.', { locale: hu })
  }
  return format(date, 'PP', { locale: hu })
}

export type CardAuthorProps = {
  author: Author
  date: Date
}

const CardAuthor: VoidComponent<CardAuthorProps> = (props) => {
  const time = () => format(props.date, 'yyyy-MM-dd')
  const formattedTime = () => formatDate(props.date)

  return (
    <div class={styles.bottom}>
      <Show when={!!props.author.image}>
        <img class={styles.authorImg} src={props.author.image!} alt={props.author.name} />
      </Show>
      <span class={styles.authorName}>{props.author.name}</span>
      <time dateTime={time()}>{formattedTime()}</time>
    </div>
  )
}

export type PostCardProps = {
  post: Post
}

const PostCard: VoidComponent<PostCardProps> = (props) => {
  const link = () => `/posts/${props.post.id}`
  const color = () => Color(props.post.color).saturate(100).lightness(80).string()

  return (
    <article class={styles.card} style={{ 'background-color': color() }}>
      <A href={link()} class={styles.imageLink}>
        <img class={styles.indexImg} src={props.post.indexImage} alt="" />
      </A>
      <div class={styles.labelContainer}>
        <For each={props.post.labels}>{(label) => <Label label={label} />}</For>
      </div>
      <A href={link()} class={styles.content} tabindex={-1}>
        <h2 class={styles.title}>{props.post.title}</h2>
        <Show when={!!props.post.description}>
          <p class={styles.description}>{props.post.description}</p>
        </Show>
        <CardAuthor date={new Date(props.post.date)} author={props.post.author} />
      </A>
    </article>
  )
}

export default PostCard
