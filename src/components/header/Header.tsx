// Components
import Time from './Time'
import SearchBar from './SearchBar'

/**
 * Main header of each page.
 */
export default function Header() {
	return (
		<header className='flex justify-between'>
			<div>
				<span className='font-bold text-5xl block mb-2'>안녕하세요!</span>
				<span className='text-2xl text-main-blue'>Wingster </span>
				<span className='text-2xl'>Wings & K-Food</span>
			</div>
			<div>
				<SearchBar />
				<Time />
			</div>
		</header>
	)
}
