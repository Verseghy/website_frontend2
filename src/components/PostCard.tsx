import { A } from '@solidjs/router'
import Color from 'color'
import { For, Show, VoidComponent } from 'solid-js'
import { Author, Post } from '~/models/post'
import FormattedDate from './FormattedDate'
import Label from './Label'
import styles from './PostCard.module.scss'

export type CardAuthorProps = {
  author: Author
  date: Date
}

const CardAuthor: VoidComponent<CardAuthorProps> = (props) => {
  return (
    <div class={styles.bottom}>
      <Show when={!!props.author.image}>
        <img class={styles.authorImg} src={props.author.image!} alt={props.author.name} />
      </Show>
      <span class={styles.authorName}>{props.author.name}</span>
      <FormattedDate date={props.date} />
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
        <p class={styles.description}>{props.post.description ?? ''}</p>
        <CardAuthor date={new Date(props.post.date)} author={props.post.author} />
      </A>
    </article>
  )
}

export default PostCard
