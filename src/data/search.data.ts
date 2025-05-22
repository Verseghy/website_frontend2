import { gql, request } from '@solid-primitives/graphql'
import { query, type RoutePreloadFunc } from '@solidjs/router'
import { GRAPHQL_BACKEND_URL } from '~/constants'
import type { Connection, PageInfo } from '~/models/connection'
import type { Post } from '~/models/post'

const FRAGMENT = gql`
  fragment Posts on PostConnection {
    edges {
      node {
        id
        title
        description
        color
        author {
          id
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
`

const AUTHOR_QUERY = gql`
  query AuthorQuery($authorID: Int!) {
    author(id: $authorID) {
      posts {
        ...Posts
      }
    }
  }
  ${FRAGMENT}
`

const LABEL_QUERY = gql`
  query LabelQuery($labelID: Int!) {
    label(id: $labelID) {
      posts {
        ...Posts
      }
    }
  }
  ${FRAGMENT}
`

const TERM_QUERY = gql`
  query TermQuery($term: String!) {
    search(term: $term, last: 20) {
      ...Posts
    }
  }
  ${FRAGMENT}
`

const queryTerm = async (term: string) => {
  type Response = {
    search: Connection<Post, PageInfo>
  }

  const response = await request<Response>(GRAPHQL_BACKEND_URL, TERM_QUERY, {
    variables: {
      term,
    },
  })

  return response.search.edges.map((e) => e.node)
}

const queryAuthor = async (authorID: number) => {
  type Response = {
    author: {
      posts: Connection<Post, PageInfo>
    }
  }

  const response = await request<Response>(GRAPHQL_BACKEND_URL, AUTHOR_QUERY, {
    variables: {
      authorID,
    },
  })

  return response.author.posts.edges.map((e) => e.node)
}

const queryLabel = async (labelID: number): Promise<Post[]> => {
  type Response = {
    label: {
      posts: Connection<Post, PageInfo>
    }
  }

  const response = await request<Response>(GRAPHQL_BACKEND_URL, LABEL_QUERY, {
    variables: {
      labelID,
    },
  })

  return response.label.posts.edges.map((e) => e.node)
}

const getFirst = (value: string | string[]): string => {
  if (Array.isArray(value)) {
    return value[0]
  }
  return value
}

// TODO: use SearchParams form @solidjs/router when v0.15.4 releases
type SearchParams = Record<string, string | string[]>

export const querySearchPage = query(async (query: SearchParams): Promise<Post[]> => {
  if (query.term) {
    return await queryTerm(getFirst(query.term))
  }

  if (query.author) {
    const id = Number.parseInt(getFirst(query.author))

    if (!Number.isSafeInteger(id)) {
      return []
    }

    return await queryAuthor(id)
  }

  if (query.label) {
    const id = Number.parseInt(getFirst(query.label))

    if (!Number.isSafeInteger(id)) {
      return []
    }

    return await queryLabel(id)
  }

  console.log(query, 'wtf?')

  return []
}, 'Search.querySearchPage')

export const loadSearchPage: RoutePreloadFunc = ({ location }) => {
  void querySearchPage(location.query)
}
