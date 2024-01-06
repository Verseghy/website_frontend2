export type Connection<Node, Info = never> = {
  edges: {
    node: Node
  }[]
  pageInfo: Info
}

export type PageInfo = {
  endCursor: string
  hasPreviousPage: boolean
}
