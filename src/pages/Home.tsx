import { VoidComponent } from 'solid-js'
import PostCard from '~/components/PostCard'
import { Post } from '~/models/post'

const post: Post = {
  id: 369,
  title: 'Tanévnyitó ünnepség, fotókkal',
  description: 'Megnyitottuk a 2023/24-es tanévet.',
  color: '#DE0C5E',
  content: '',
  author: {
    name: 'Balogh Janka',
    image: null,
  },
  date: '2023-09-01',
  indexImage: 'https://backend.verseghy-gimnazium.net/storage/posts_images/index/ffb9a4c621907e33dbf9116e46c78176.jpg',
  labels: [
    {
      name: 'iskola',
      color: '#B5B3CE',
    },
    {
      name: 'ünnepség',
      color: '#e6eb14',
    },
  ],
  images: [],
}

const HomePage: VoidComponent = () => {
  return (
    <>
      asd
      <div style={{ width: '400px' }}>
        <PostCard post={post} />
      </div>
    </>
  )
}

export default HomePage
