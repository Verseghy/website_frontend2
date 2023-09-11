import { Component, JSX } from 'solid-js'
import { Title } from 'solid-start'

/* export type TitleProps = { */
/*   children?: string */
/* } */

const title = 'Verseghy Ferenc Gimnázium'

const TitleComp: Component<JSX.HTMLAttributes<HTMLTitleElement>> = (props) => {
  const fullTitle = () => {
    if (!props.children) return title
    return `${props.children} - ${title}`
  }

  return <Title>{fullTitle()}</Title>
}

export default TitleComp
