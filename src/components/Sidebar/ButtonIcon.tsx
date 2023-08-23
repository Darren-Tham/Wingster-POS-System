// React
import { JSX } from 'react'

// Components
import SelectionBar from './SelectionBar'

// Next
import Image, { StaticImageData } from 'next/image'

type Props = {
	src: StaticImageData
	alt: string
	buttonStyles: string
	isSelected?: boolean
}

/**
 * Button with Icons that performs an action
 * in the `Sidebar`.
 *
 * @param Props `ButtonIcon` props
 * @returns `ButtonIcon` components
 */
export default function ButtonIcon({ src, alt, buttonStyles, isSelected }: Props): JSX.Element {
	return (
		<button className={buttonStyles}>
			<Image src={src} alt={alt} />
			{isSelected && <SelectionBar />}
		</button>
	)
}
