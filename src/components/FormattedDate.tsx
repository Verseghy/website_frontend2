import type { VoidComponent } from 'solid-js'

const FULL_FORMATTER = new Intl.DateTimeFormat('hu-HU', { year: 'numeric', month: 'short', day: 'numeric' })
const SAME_YEAR_FORMATTER = new Intl.DateTimeFormat('hu-HU', { month: 'short', day: 'numeric' })

export function formatHumanReadableDate(date: Date): string {
  if (date.getFullYear() === new Date().getFullYear()) {
    return SAME_YEAR_FORMATTER.format(date)
  }
  return FULL_FORMATTER.format(date)
}

export function formatMachineReadableDate(date: Date): string {
  const year = String(date.getFullYear()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export type DateProps = {
  date: Date
}

const FormattedDate: VoidComponent<DateProps> = (props) => {
  return <time datetime={formatMachineReadableDate(props.date)}>{formatHumanReadableDate(props.date)}</time>
}

export default FormattedDate
