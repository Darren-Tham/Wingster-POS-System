// Components
import HeaderCell from './HeaderCell'
import ButtonCell from './ButtonCell'

/**
 * Returns the Header cells for
 * the grid in the Home page.
 *
 * @param headerCellNames names of the header cells
 * @param cellStyles general style of the cell
 * @returns array of `HeaderCell` components
 */
function getHeaderCells(headerCellNames: string[], cellStyles: string) {
	return headerCellNames.map(name => <HeaderCell key={name} value={name} cellStyles={cellStyles} />)
}

/**
 * Returns the Button cells for
 * the grid in the Home page.
 *
 * @param buttonCellNames names of the button cells
 * @param cellStyles general style of the cell
 * @returns array of `ButtonCell` components
 */
function getButtonCells(buttonCellNames: string[], cellStyles: string) {
	return buttonCellNames.map(name => <ButtonCell key={name} value={name} cellStyles={cellStyles} />)
}

/**
 * Grid that links to different pages
 * of the application for the `Home` page.
 */
export default function Grid() {
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
		<section className='grid grid-rows-4 grid-cols-4 grow gap-3 place-items-center text-3xl'>
			{getHeaderCells(headerCellValues, cellStyles)}
			{getButtonCells(buttonCellValues, cellStyles)}
		</section>
	)
}
