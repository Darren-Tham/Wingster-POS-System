// Components
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import Grid from '../components/Home/Grid'

/**
 * Home page of the application.
 * @returns `Home` page
 */
export default function Home() {
	return (
		<div className='flex'>
			<Sidebar />
			<main className='flex flex-col grow bg-neutral-100 p-10 gap-10'>
				<Header />
                <Grid />
			</main>
		</div>
	)
}
