import { VoidComponent } from 'solid-js'
import { Meta, Title as TitleMeta } from 'solid-start'

/* export type TitleProps = { */
/*   children?: string */
/* } */

const BASE_TITLE = 'Verseghy Ferenc Gimnázium'

export type TitleProps = {
  title?: string
}

const Title: VoidComponent<TitleProps> = (props) => {
  const fullTitle = () => {
    if (!props.title) return BASE_TITLE
    return `${props.title} - ${BASE_TITLE}`
  }

  const metaTitle = () => {
    if (!props.title) return BASE_TITLE
    return props.title!
  }

  return (
    <>
      <TitleMeta>{fullTitle()}</TitleMeta>
      <Meta name="title" content={metaTitle()} />
    </>
  )
}

export default Title
