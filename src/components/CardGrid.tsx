import { For, VoidComponent } from 'solid-js'
import { Post } from '~/models/post'
import styles from './CardGrid.module.scss'
import PostCard from './PostCard'

export type CardGridProps = {
  posts: Post[]
}

const CardGrid: VoidComponent<CardGridProps> = (props) => {
  return (
    <div class={styles.grid}>
      <For each={props.posts}>{(post) => <PostCard post={post} />}</For>
    </div>
  )
}

export default CardGrid
