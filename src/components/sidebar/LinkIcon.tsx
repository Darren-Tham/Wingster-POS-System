// Next
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

// Components
import SelectionBar from './SelectionBar'

/**
 * Props for the `LinkIcon` component.
 */
type Props = {
	href: string
	src: StaticImageData
	alt: string
	iconStyles: string
	isSelected: boolean
}

/**
 * Link element with Icon that links to
 * another page in `Sidebar`.
 *
 * @param Props `LinkIcon` props
 * @param href relative path to another page
 * @param src source of the image
 * @param alt alternative text for the image
 * @param iconStyles general styling for the icons
 * @param isSelected boolean determining whether the
 *                   icon is seleted
 * @returns `LinkIcon` component
 */
export default function LinkIcon({ href, src, alt, iconStyles, isSelected }: Props) {
	return (
		<Link className={iconStyles} href={href}>
			<Image src={src} alt={alt} />
			{isSelected && <SelectionBar />}
		</Link>
	)
}
