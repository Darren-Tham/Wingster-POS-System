// Next
import Link from "next/link"

/**
 * Props for `ButtonCell` component.
 */
type Props = {
  name: string
  href: string
  cellStyles: string
}

/**
 * Buttons in the grid from the `Home`
 * page that links to different pages.
 *
 * @param name name of the `ButtonCell`
 * @param href relative path to another page
 * @param cellStyles general styling of a cell
 * @returns `ButtonCell` component
 */
export default function ButtonCell({ name, href, cellStyles }: Props) {
  return (
    <Link className={`${cellStyles} bg-white hover:bg-neutral-50`} href={href}>
      {name}
    </Link>
  )
}
