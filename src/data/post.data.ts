import { gql, request } from '@solid-primitives/graphql'
import { query, type RoutePreloadFunc, redirect } from '@solidjs/router'
import { GRAPHQL_BACKEND_URL } from '~/constants'
import type { Post } from '~/models/post'

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

export const queryPostById = query(async (id: string): Promise<Post> => {
  const parsedID = Number(id)

  type Response = {
    post: Post
  }

  const response = await request<Response>(GRAPHQL_BACKEND_URL, QUERY, {
    variables: {
      id: parsedID,
    },
  })

  if (response.post === null) {
    throw redirect('/404')
  }

  return response.post
}, 'Post.queryPostById')

export const loadPost: RoutePreloadFunc = ({ params }) => {
  void queryPostById(params.id)
}
