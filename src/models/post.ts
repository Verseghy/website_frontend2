export type Post = {
  id: number
  title: string
  color: string
  description: string
  content: string
  date: string // TODO: Date
  indexImage: string
  images: string[]
  author: Author
  labels: Label[]
}

export type Author = {
  name: string
  image: string | null
}

export type Label = {
  name: string
  color: string
}
