import { createGraphQLClient, gql } from '@solid-primitives/graphql'
import { VoidComponent } from 'solid-js'
import { Meta } from 'solid-start'
import Banners from '~/components/Banners'
import CardGrid from '~/components/CardGrid'
import { GRAPHQL_BACKEND_URL } from '~/constants'
import { Post } from '~/models/post'
import previewImage from '/assets/preview_image.png'
import styles from './Home.module.scss'

const QUERY = gql`
  query Posts($last: Int) {
    posts(last: $last) {
      edges {
        node {
          id
          title
          description
          color
          author {
            name
            image
          }
          date
          indexImage
          labels {
            id
            name
            color
          }
        }
      }
      pageInfo {
        endCursor
        hasPreviousPage
      }
    }
  }
`

type Response = {
  posts: {
    edges: {
      node: Post
    }[]
    pageInfo: {
      endCursor: string
      hasPreviousPage: boolean
    }
  }
}

const HomePage: VoidComponent = () => {
  const newQuery = createGraphQLClient(GRAPHQL_BACKEND_URL)
  const [data] = newQuery<Response>(QUERY, { last: 21 }, { deferStream: false })

  return (
    <>
      <Meta name="og:site_name" content="Verseghy Ferenc Gimnázium" />
      <Meta name="og:type" content="website" />
      <Meta name="og:image" content={previewImage} />
      <Meta name="og:description" content="A szolnoki Verseghy Ferenc Gimnázium weboldala" />
      <Meta name="twitter:card" content="summary" />

      <div class={styles.container}>
        <CardGrid posts={data()?.posts.edges.map((e) => e.node)} />
        <Banners />
      </div>
    </>
  )
}

export default HomePage
