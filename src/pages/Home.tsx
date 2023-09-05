import { createGraphQLClient, gql } from '@solid-primitives/graphql'
import { For, VoidComponent } from 'solid-js'
import CardGrid from '~/components/CardGrid'
import PostCard from '~/components/PostCard'
import { Post } from '~/models/post'

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
  const newQuery = createGraphQLClient('https://backend2.verseghy-gimnazium.net/graphql')
  const [data] = newQuery<Response>(QUERY, { last: 3 })

  return (
    <>
      <div>
        <CardGrid posts={data()?.posts.edges.map((e) => e.node)} />
      </div>
    </>
  )
}

export default HomePage
