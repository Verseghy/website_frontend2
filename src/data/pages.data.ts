import { gql, request } from '@solid-primitives/graphql'
import { query, type RoutePreloadFunc, redirect } from '@solidjs/router'
import { GRAPHQL_BACKEND_URL } from '~/constants'
import type { Page } from '~/models/page'

const QUERY = gql`
  query Page($slug: String!) {
    page(slug: $slug) {
      id
      template
      name
      title
      content
      extras
    }
  }
`

export const queryPageByID = query(async (slug: string): Promise<Page> => {
  type Response = {
    page: Page
  }

  const response = await request<Response>(GRAPHQL_BACKEND_URL, QUERY, {
    variables: {
      slug,
    },
  })

  if (response.page === null) {
    throw redirect('/404')
  }

  return response.page
}, 'Pages.queryPageByID')

export const loadPage: RoutePreloadFunc = ({ params }) => {
  void queryPageByID(params.slug)
}
