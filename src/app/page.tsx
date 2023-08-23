// Components
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import Grid from '../components/Home/Grid'

// Constants
import { MAIN_BACKGROUND_STYLES } from '../lib/Constants'

/**
 * Home page of the application.
 * @returns `Home` page
 */
export default function Home() {
	return (
		<div className='flex'>
			<Sidebar />
			<main className={`${MAIN_BACKGROUND_STYLES} gap-10`}>
				<Header />
                <Grid />
			</main>
		</div>
	)
}
