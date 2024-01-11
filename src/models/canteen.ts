export type Day<D = Date> = {
  id: number
  menus: [Menu, Menu, Menu?]
  date: D
}

export type Menu = {
  id: number
  menu: string
  type: number
}
