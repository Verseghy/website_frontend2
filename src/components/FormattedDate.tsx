import { format, isSameYear } from 'date-fns'
import { hu } from 'date-fns/locale'
import { VoidComponent } from 'solid-js'

const FORMAT_OPTIONS = { locale: hu }

export const formatDate = (date: Date): string => {
  if (isSameYear(new Date(), date)) {
    return format(date, 'MMM do', FORMAT_OPTIONS)
  }
  return format(date, 'PP', FORMAT_OPTIONS)
}

export type DateProps = {
  date: Date
}

const FormattedDate: VoidComponent<DateProps> = (props) => {
  const formatted = () => formatDate(props.date)
  const datetime = () => format(props.date, 'yyyy-MM-dd')

  return <time datetime={datetime()}>{formatted()}</time>
}

export default FormattedDate
