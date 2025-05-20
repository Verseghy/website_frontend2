export type PageTemplate = 'services' | 'page'

export type Page = {
  id: number
  template: PageTemplate
  name: string
  title: string
  content: string
  // biome-ignore lint/suspicious/noExplicitAny: this really can be any
  extras: any
}
