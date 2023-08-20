// React
import { JSX } from 'react'

// Components
import Time from './Time'

/**
 * Main header of each page.
 */
export default function Header(): JSX.Element {
	return (
		<header className='flex justify-between'>
			<div>
				<span className='font-bold text-5xl block mb-2'>안녕하세요!</span>
				<span className='text-2xl text-main-blue'>Wingster </span>
				<span className='text-2xl'>Wings & K-Food</span>
			</div>
			<div>
				<Time />
			</div>
		</header>
	)
}
