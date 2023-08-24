// Next
import Link from 'next/link'

type Props = {
	name: string
	href: string
	cellStyles: string
}

/**
 * Buttons in the grid from the `Home`
 * page that links to different pages.
 *
 * @param Props props of `ButtonCell`
 * @returns `ButtonCell` component
 */
export default function ButtonCell({ name, href, cellStyles }: Props) {
	return (
		<Link className={`${cellStyles} bg-white hover:bg-neutral-50`} href={href}>
			{name}
		</Link>
	)
}
