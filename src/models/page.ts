export enum PageTemplate {
  SERVICES = 'services',
}

export type Page = {
  id: number
  template: PageTemplate
  name: string
  title: string
  content: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extras: Record<string, any>
}
