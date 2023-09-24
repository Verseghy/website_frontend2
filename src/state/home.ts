import { gql, request } from '@solid-primitives/graphql'
import { createEffect, createResource, Resource, ResourceReturn, useContext } from 'solid-js'
import { GRAPHQL_BACKEND_URL } from '~/constants'
import { Post } from '~/models/post'
import { StateContext } from './StateProvider'

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

export const homeState = (): (() => Resource<Post[]>) => {
  let posts: Post[] | null = null
  let pageInfo: PageInfo | null = null

  const queryPage = async (endCursor?: string): Promise<Post[]> => {
    type Response = {
      posts: {
        edges: {
          node: Post
        }[]
        pageInfo: PageInfo
      }
    }

    const response = await request<Response>(GRAPHQL_BACKEND_URL, QUERY, {
      variables: {
        last: POSTS_PER_PAGE,
        before: endCursor ?? undefined,
      },
    })

    pageInfo = response.posts.pageInfo

    return response.posts.edges.map((e) => e.node)
  }

  let init = true

  return () => {
    const [data] = createResource<Post[]>(() => {
      if (posts !== null) return posts
      return queryPage()
    })

    if (init) {
      createEffect(() => {
        if (!data()) return
        posts = data()!
      })
      init = false
    }

    return data
  }
}

export const homeRouteData = (): Resource<Post[]> => {
  return useContext(StateContext)!.homeState()
}
