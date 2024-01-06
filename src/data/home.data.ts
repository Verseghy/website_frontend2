import { gql, request } from '@solid-primitives/graphql'
import { cache, RouteLoadFunc } from '@solidjs/router'
import { GRAPHQL_BACKEND_URL } from '~/constants'
import { Connection, PageInfo } from '~/models/connection'
import { Post } from '~/models/post'

const POSTS_PER_PAGE = 21

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

export type PageInfo = {
  endCursor: string
  hasPreviousPage: boolean
}

export const queryHomePage = cache(async (endCursor?: string): Promise<Post[]> => {
  type Response = {
    posts: Connection<Post, PageInfo>
  }

  const response = await request<Response>(GRAPHQL_BACKEND_URL, QUERY, {
    variables: {
      last: POSTS_PER_PAGE,
      before: endCursor ?? undefined,
    },
  })

  // pageInfo = response.posts.pageInfo

  return response.posts.edges.map((e) => e.node)
}, 'Home.queryHomePage')

export const loadHomePage: RouteLoadFunc = () => {
  void queryHomePage()
}
