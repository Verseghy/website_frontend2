import { gql, request } from '@solid-primitives/graphql'
import { cache, redirect, RoutePreloadFunc } from '@solidjs/router'
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

export const queryPostById = cache(async (id: string): Promise<Post> => {
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
    // eslint-disable-next-line @typescript-eslint/only-throw-error
    throw redirect('/404')
  }

  return response.post
}, 'Post.queryPostById')

export const loadPost: RoutePreloadFunc = ({ params }) => {
  void queryPostById(params.id)
}
