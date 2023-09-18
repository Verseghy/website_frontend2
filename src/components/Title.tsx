import { Component, JSX } from 'solid-js'
import { Title } from 'solid-start'

/* export type TitleProps = { */
/*   children?: string */
/* } */

const BASE_TITLE = 'Verseghy Ferenc Gimnázium'

const TitleComp: Component<JSX.HTMLAttributes<HTMLTitleElement>> = (props) => {
  const fullTitle = () => {
    if (!props.children) return BASE_TITLE
    return `${props.children} - ${BASE_TITLE}`
  }

  return <Title>{fullTitle()}</Title>
}

export default TitleComp
