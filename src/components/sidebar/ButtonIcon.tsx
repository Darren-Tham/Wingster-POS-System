// React
import { JSX } from 'react'

// Components
import SelectionBar from './SelectionBar'

// Next
import Image, { StaticImageData } from 'next/image'

/**
 * Props for the `ButtonIcon` component.
 */
type Props = {
	src: StaticImageData
	alt: string
	iconStyles: string
	isSelected?: boolean
}

/**
 * Button with Icons that performs an action
 * in the `Sidebar`.
 *
 * @param src source of the image
 * @param alt alternative text for the image
 * @param iconStyles general styling for the icons
 * @param isSelected boolean determining whether the
 *                   icon is seleted
 * @returns `ButtonIcon` components
 */
export default function ButtonIcon({ src, alt, iconStyles, isSelected }: Props): JSX.Element {
	return (
		<button className={iconStyles}>
			<Image src={src} alt={alt} />
			{isSelected && <SelectionBar />}
		</button>
	)
}
