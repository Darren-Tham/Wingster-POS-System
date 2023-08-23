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
	isSelected: boolean
}

export default function ButtonIcon({ src, alt, buttonStyles, isSelected }: Props): JSX.Element {
	return (
		<button className={buttonStyles}>
			<Image src={src} alt={alt}></Image>
			{isSelected && <SelectionBar />}
		</button>
	)
}
