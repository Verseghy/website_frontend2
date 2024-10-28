import { gql, request } from '@solid-primitives/graphql'
import { RoutePreloadFunc, cache } from '@solidjs/router'
import { GRAPHQL_BACKEND_URL } from '~/constants'
import { MenuItem } from '~/models/information'

const QUERY_INFORMATION_MENU = gql`
  query InformationMenu {
    menu {
      name
      type
      link
      slug
      children {
        name
        type
        link
        slug
      }
    }
  }
`

export const queryInformationMenu = cache(async (): Promise<MenuItem[]> => {
  type Response = {
    menu: MenuItem[]
  }

  const response = await request<Response>(GRAPHQL_BACKEND_URL, QUERY_INFORMATION_MENU)

  if (response.menu === null) {
    console.error('Failed to query information page menu')
    return []
  }

  return response.menu
}, 'Information.queryInformationMenu')

export const loadInformationMenu: RoutePreloadFunc = () => {
  void queryInformationMenu()
}
