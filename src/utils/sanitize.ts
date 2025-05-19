import DOMPurify, { type DOMPurify as DOMPurifyI } from 'dompurify'
import { JSDOM } from 'jsdom'
import { isServer } from 'solid-js/web'
import { IMAGE_ORIGIN } from '~/constants'

const imageOrigin = new URL(IMAGE_ORIGIN)

function fixURLOrigin(dom: Document) {
  const images = dom.getElementsByTagName('img')

  for (const img of images) {
    try {
      const url = new URL(img.src, IMAGE_ORIGIN)

      url.protocol = imageOrigin.protocol
      url.host = imageOrigin.host
      url.port = imageOrigin.port

      img.src = url.href
    } catch (e) {
      console.error(`Failed to parse url: '${img.src}'`, e)
    }
  }
}

export type SanitizerFn = (dirty: string) => string

function sanitize(purify: DOMPurifyI, parser: DOMParser, dirty: string): string {
  const dom = parser.parseFromString(dirty, 'text/html')

  fixURLOrigin(dom)

  purify.addHook('afterSanitizeAttributes', function (node) {
    if (node.tagName === 'A') {
      node.setAttribute('target', '_blank')
      node.setAttribute('rel', 'noopener')
    }
  })

  const clean = purify.sanitize(dom.body, {
    ADD_TAGS: ['iframe'],
  })

  return clean
}

function getServerSanitizer(): SanitizerFn {
  'use server'

  const window = new JSDOM('').window
  const purify = DOMPurify(window)
  const parser = new window.DOMParser()

  return (dirty) => sanitize(purify, parser, dirty)
}

function getClientSanitizer(): SanitizerFn {
  const parser = new DOMParser()

  return (dirty) => sanitize(DOMPurify, parser, dirty)
}

export function getSanitizer(): SanitizerFn {
  if (isServer) {
    return getServerSanitizer()
  } else {
    return getClientSanitizer()
  }
}
