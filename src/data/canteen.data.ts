import { gql, request } from '@solid-primitives/graphql'
import { query } from '@solidjs/router'
import { addWeeks, getISOWeek, getISOWeekYear } from 'date-fns'
import { GRAPHQL_BACKEND_URL } from '~/constants'
import { Day } from '~/models/canteen'

const QUERY = gql`
  query CanteenTwoWeeks($year1: Int!, $week1: Int!, $year2: Int!, $week2: Int!) {
    week1: canteen(year: $year1, week: $week1) {
      ...canteen
    }
    week2: canteen(year: $year2, week: $week2) {
      ...canteen
    }
  }

  fragment canteen on Canteen {
    date
    menus {
      menu
      type
    }
  }
`

export type CanteenData = [Day[], Day[]]

export const queryCanteen = query(async (): Promise<CanteenData> => {
  const now = new Date()
  const nextWeek = addWeeks(now, 1)

  type Result = {
    week1: Day<string>[]
    week2: Day<string>[]
  }

  const response = await request<Result>(GRAPHQL_BACKEND_URL, QUERY, {
    variables: {
      year1: getISOWeekYear(now),
      week1: getISOWeek(now),
      year2: getISOWeekYear(nextWeek),
      week2: getISOWeek(nextWeek),
    },
  })

  return [
    response.week1.map((d) => ({
      ...d,
      date: new Date(d.date),
    })),
    response.week2.map((d) => ({
      ...d,
      date: new Date(d.date),
    })),
  ]
}, 'Canteen.queryCanteen')
