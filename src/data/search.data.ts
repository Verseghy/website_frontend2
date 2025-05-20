import { gql, request } from '@solid-primitives/graphql'
import { type Params, type RoutePreloadFunc, query } from '@solidjs/router'
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
    search: {
      edges: {
        node: Post
      }[]
      pageInfo: PageInfo
    }
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
      posts: {
        edges: {
          node: Post
        }[]
        pageInfo: PageInfo
      }
    }
  }

  const response = await request<Response>(GRAPHQL_BACKEND_URL, AUTHOR_QUERY, {
    variables: {
      authorID,
    },
  })

  return response.author.posts.edges.map((e) => e.node)
}

const queryLabel = async (labelID: number) => {
  type Response = {
    label: {
      posts: Connection<PageInfo>
    }
  }

  const response = await request<Response>(GRAPHQL_BACKEND_URL, LABEL_QUERY, {
    variables: {
      labelID,
    },
  })

  return response.label.posts.edges.map((e) => e.node)
}

export const querySearchPage = query(async (query: Params) => {
  if (query.term) {
    return await queryTerm(query.term)
  }

  if (query.author) {
    const id = Number.parseInt(query.author)

    if (!Number.isSafeInteger(id)) {
      return []
    }

    return await queryAuthor(id)
  }

  if (query.label) {
    const id = Number.parseInt(query.label)

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
