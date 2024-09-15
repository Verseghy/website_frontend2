export type Colleague = {
  id: string
  name: string
  jobs?: string
  subjects?: string
  roles?: string
  awards?: string
  image?: string
  category: number
}

export type Category = {
  name: string
  colleagues: Colleague[]
}
