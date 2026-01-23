import { gql, request } from '@solid-primitives/graphql'
import { query, type RoutePreloadFunc } from '@solidjs/router'
import { GRAPHQL_BACKEND_URL } from '~/constants'
import type { Connection, PageInfo } from '~/models/connection'
import type { Post } from '~/models/post'

const NUM_POSTS_PER_PAGE = 21
const NUM_FEATURED_POSTS = 20

const QUERY_POSTS_FRAGMENT = gql`
  fragment PostsFragment on PostConnection {
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
  }
`

const QUERY_INITIAL = gql`
  ${QUERY_POSTS_FRAGMENT}

  query Posts($first: Int, $numFeaturedPosts: Int) {
    featuredPosts: posts(featured: true, first: $numFeaturedPosts) {
      ...PostsFragment,
    }
    posts(first: $first) {
      ...PostsFragment,
      pageInfo {
        endCursor
        hasPreviousPage
      }
    }
  }
`

export type HomeData = {
  featuredPosts: Post[]
  posts: Post[]
}

export const queryHomePage = query(async (endCursor?: string): Promise<HomeData> => {
  type Response = {
    featuredPosts: Connection<Post>
    posts: Connection<Post, PageInfo>
  }

  const response = await request<Response>(GRAPHQL_BACKEND_URL, QUERY_INITIAL, {
    variables: {
      first: NUM_POSTS_PER_PAGE,
      numFeaturedPosts: NUM_FEATURED_POSTS,
      before: endCursor ?? undefined,
    },
  })

  // pageInfo = response.posts.pageInfo

  return {
    featuredPosts: response.featuredPosts.edges.map((e) => e.node),
    posts: response.posts.edges.map((e) => e.node),
  }
}, 'Home.queryHomePage')

export const loadHomePage: RoutePreloadFunc = () => {
  void queryHomePage()
}
