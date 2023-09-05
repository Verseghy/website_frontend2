import { createGraphQLClient, gql } from '@solid-primitives/graphql'
import { VoidComponent } from 'solid-js'
import CardGrid from '~/components/CardGrid'
import { GRAPHQL_BACKEND_URL } from '~/constants'
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
