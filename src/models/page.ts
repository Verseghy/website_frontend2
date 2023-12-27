export enum PageTemplate {
  SERVICES = 'services',
}

export type Page = {
  id: number
  template: PageTemplate
  name: string
  title: string
  content: string
  extras: {
    [attr: string]: any
  }
}
