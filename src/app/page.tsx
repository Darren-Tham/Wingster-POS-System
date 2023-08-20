// React
import { JSX } from 'react'

// Components
import Header from './_components/Header/Header'
import Sidebar from './_components/Sidebar/Sidebar'
import Grid from './_components/Home/Grid'

/**
 * Home page of the application.
 * @returns `Home` page
 */
export default function Home(): JSX.Element {
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
