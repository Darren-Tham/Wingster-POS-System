// Components
import Time from './Time'
import SearchBar from './SearchBar'

type Props = {
	showSearchBar: boolean
}

/**
 * Main header of each page.
 */
export default function Header({ showSearchBar }: Props) {
	return (
		<header className='flex justify-between'>
			<div>
				<span className='font-bold text-5xl block mb-2'>안녕하세요!</span>
				<span className='text-2xl text-main-blue'>Wingster </span>
				<span className='text-2xl'>Wings & K-Food</span>
			</div>
			<div>
                { !showSearchBar && <Time />}
                { showSearchBar && <SearchBar />}
			</div>
		</header>
	)
}
