import { For, VoidComponent } from 'solid-js'
import { Post } from '~/models/post'
import PostCard from './PostCard'
import styles from './CardGrid.module.scss'

export type CardGridProps = {
  posts: Post[] | undefined
}

const CardGrid: VoidComponent<CardGridProps> = (props) => {
  return (
    <div class={styles.grid}>
      <For each={props.posts}>{(post) => <PostCard post={post} />}</For>
    </div>
  )
}

export default CardGrid