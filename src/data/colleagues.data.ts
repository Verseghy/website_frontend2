import { gql, request } from '@solid-primitives/graphql'
import { RoutePreloadFunc, cache } from '@solidjs/router'
import { GRAPHQL_BACKEND_URL } from '~/constants'
import { Category, Colleague } from '~/models/colleague'

const CATEGORY_NAMES: { [K: string]: string } = {
  '0': 'Vezetőség',
  '1': 'Tanárok',
  '2': 'Óraadók',
  '3': 'Nevelő, oktató munkát közvetlenül segítők',
  '4': 'Karbantartók, portások, takarítók',
}

const HEAD_TEACHER = 'Szűcs Sándor'

const QUERY = gql`
  query Colleagues {
    colleagues {
      id
      name
      jobs
      subjects
      roles
      awards
      image
      category
    }
  }
`

export const queryColleaguesPage = cache(async (): Promise<Category[]> => {
  type Response = {
    colleagues: Colleague[]
  }

  // TODO: error handling
  const response = await request<Response>(GRAPHQL_BACKEND_URL, QUERY)

  if (response === undefined) {
    return []
  }

  const colleagues = Object.groupBy(response.colleagues, ({ category }) => category)

  const categories = []

  for (const [key, value] of Object.entries(colleagues)) {
    const colleagues = value ?? []

    colleagues.sort((a, b) => {
      if (a.name === HEAD_TEACHER) {
        return -1
      } else if (b.name === HEAD_TEACHER) {
        return 1
      }

      return a.name > b.name ? 1 : -1
    })

    categories.push({
      name: CATEGORY_NAMES[key],
      colleagues,
    } satisfies Category)
  }

  return categories
}, 'Colleagues.queryColleaguesPage')

export const loadColleaguesPage: RoutePreloadFunc = () => {
  void queryColleaguesPage()
}
