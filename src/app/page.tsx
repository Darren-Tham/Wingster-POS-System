// Components
import Header from './_components/Header/Header'
import Sidebar from './_components/Sidebar/Sidebar'
import HeaderCell from './_components/Home/HeaderCell'
import ButtonCell from './_components/Home/ButtonCell'

const HEADER_CELL_VALUES = ['Orders', ' Payments', 'History', 'Settings']
const BUTTON_CELL_VALUES = [
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

function renderHeaderCells(headerCellValues: string[], cellStyles: string): JSX.Element[] {
	return headerCellValues.map(value => <HeaderCell key={value} value={value} cellStyles={cellStyles} />)
}

function renderButtonCells(buttonCellValues: string[], cellStyles: string): JSX.Element[] {
	return buttonCellValues.map(value => <ButtonCell key={value} value={value} cellStyles={cellStyles} />)
}

export default function Home() {
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
