// React
import { JSX } from 'react'

// Next
import Image, { StaticImageData } from 'next/image'

type Props = {
	src: StaticImageData
	alt: string
	buttonStyles: string
}

export default function Button({ src, alt, buttonStyles }: Props): JSX.Element {
	return (
		<button className={buttonStyles}>
			<Image src={src} alt={alt}></Image>
		</button>
	)
}
