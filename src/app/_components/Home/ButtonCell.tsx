// React
import { JSX } from 'react'

type Props = {
	value: string
	cellStyles: string
}

/**
 * Buttons in the grid from the `Home`
 * page that links to different pages.
 *
 * @param Props props of `ButtonCell`
 * @returns `ButtonCell` component
 */
export default function ButtonCell({ value, cellStyles }: Props): JSX.Element {
	return <button className={`${cellStyles} bg-white`}>{value}</button>
}
