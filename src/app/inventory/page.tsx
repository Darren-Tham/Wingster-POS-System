// Components
import Header from '@/components/header/Header'
import Sidebar from '@components/sidebar/Sidebar'

// Constants
import { MAIN_BACKGROUND_STYLES } from '@lib/Constants'

export default function Inventory() {
	return (
		<div className='flex'>
			<Sidebar />
            <main className={`${MAIN_BACKGROUND_STYLES}`}>
                <Header showSearchBar={true} />
            </main>
		</div>
	)
}
