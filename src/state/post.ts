import { createGraphQLClient, gql } from '@solid-primitives/graphql'
import { RouteDataArgs } from 'solid-start'
import { GRAPHQL_BACKEND_URL } from '~/constants'
import { Post } from '~/models/post'

const QUERY = gql`
  query Post($id: Int!) {
    post(id: $id) {
      id
      title
      color
      description
      content
      date
      indexImage
      images
      author {
        id
        name
        description
        image
      }
      labels {
        id
        color
        name
      }
    }
  }
`

type Response = {
  post: Post
}

export const postRouteData = ({ params }: RouteDataArgs) => {
  const id = Number(params.id)
  const newQuery = createGraphQLClient(GRAPHQL_BACKEND_URL)

  const [data] = newQuery<Response>(
    QUERY,
    {
      id,
    },
    {
      deferStream: true,
    }
  )

  return data
}
