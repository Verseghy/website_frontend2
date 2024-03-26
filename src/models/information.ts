export type MenuItemCommon = {
  name: string
  children: MenuItem[]
}

export type PageLinkMenuItem = {
  type: 'page_link'
  slug: string
} & MenuItemCommon

export type InternalOrExternalLinkMenuItem = {
  type: 'internal_link' | 'external_link'
  link: string
} & MenuItemCommon

export type MenuItem = PageLinkMenuItem | InternalOrExternalLinkMenuItem
