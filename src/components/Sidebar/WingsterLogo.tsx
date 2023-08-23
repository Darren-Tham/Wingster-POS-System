// React
import { JSX } from 'react'

// Next
import Image from 'next/image'

// Logo
import WingsterImage from '@public/wingster-logo.png'

/**
 * Wingster Icon in `Sidebar`.
 */
export default function WingsterLogo(): JSX.Element {
	return (
		<div className='my-8'>
			<Image width='70' height='70' src={WingsterImage} alt='Wingster Icon' unoptimized />
		</div>
	)
}
