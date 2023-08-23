// React
import { JSX } from 'react'

// Next
import Image from 'next/image'

// Logo
import WingsterPNG from '@public/wingster-logo.png'

/**
 * Wingster Icon in `Sidebar`.
 *
 * @returns `WingsterLogo` component
 */
export default function WingsterLogo(): JSX.Element {
	return (
		<div className='my-8'>
			<Image width='70' height='70' src={WingsterPNG} alt='Wingster Icon' unoptimized />
		</div>
	)
}
