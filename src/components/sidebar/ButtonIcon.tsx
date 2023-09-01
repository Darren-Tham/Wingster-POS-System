'use client'

// React
import { useContext } from 'react'

// Context
import IconContext from '@/context/IconContext'

// Next
import Image, { StaticImageData } from 'next/image'

/**
 * Props for the `ButtonIcon` component.
 */
type Props = {
	src: StaticImageData
	alt: string
}

/**
 * Button with Icons that performs an action
 * in the `Sidebar`.
 *
 * @param src source of the image
 * @param alt alternative text for the image
 * @returns `ButtonIcon` components
 */
export default function ButtonIcon({ src, alt }: Props) {
	const iconStyles = useContext(IconContext)

	return (
		<button className={iconStyles}>
			<Image src={src} alt={alt} />
		</button>
	)
}
