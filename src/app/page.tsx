// React
import { JSX } from 'react'

// Components
import Header from './_components/Header/Header'
import Sidebar from './_components/Sidebar/Sidebar'
import HeaderCell from './_components/Home/HeaderCell'
import ButtonCell from './_components/Home/ButtonCell'

/**
 * Renders the Header cells for
 * the grid in the Home page.
 *
 * @param headerCellNames names of the header cells
 * @param cellStyles general style of the cell
 * @returns array of `HeaderCell` components
 */
function renderHeaderCells(headerCellNames: string[], cellStyles: string): JSX.Element[] {
	return headerCellNames.map(name => <HeaderCell key={name} value={name} cellStyles={cellStyles} />)
}

/**
 * Renders the Button cells for
 * the grid in the Home page.
 *
 * @param buttonCellNames names of the button cells
 * @param cellStyles general style of the cell
 * @returns array of `ButtonCell` components
 */
function renderButtonCells(buttonCellNames: string[], cellStyles: string): JSX.Element[] {
	return buttonCellNames.map(name => <ButtonCell key={name} value={name} cellStyles={cellStyles} />)
}

/**
 * Home page of the application.
 * @returns `Home` page
 */
export default function Home(): JSX.Element {
	const headerCellValues = ['Orders', ' Payments', 'History', 'Settings']
	const buttonCellValues = [
		'Quick Order',
		'Tender',
		'Order History',
		'Inventory Settings',
		'Cosmic Order',
		'Pay Out',
		'System History',
		'User Settings',
		'Catering + Schedule',
		'Open Cash Drawer',
		'Trends',
		'Time Card'
	]
	const cellStyles = 'text-3xl rounded-xl drop-shadow-md p-6 w-full h-full'

	return (
		<div className='flex'>
			<Sidebar />
			<main className='flex flex-col grow bg-neutral-100 p-10 gap-10'>
				<Header />
				<div className='grid grid-rows-4 grid-cols-4 grow gap-2 place-items-center text-3xl'>
                    {renderHeaderCells(headerCellValues, cellStyles)}
                    {renderButtonCells(buttonCellValues, cellStyles)}
				</div>
			</main>
		</div>
	)
}
