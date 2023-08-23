// React
import { JSX } from 'react'

// Components
import Button from './Button'
import WingsterLogo from './WingsterLogo'

// Icons
import HouseIcon from '../../../public/house-icon.svg'
import BowlIcon from '../../../public/bowl-icon.svg'
import DollarSign from '../../../public/dollar-sign-icon.svg'
import CashRegister from '../../../public/cash-register-icon.svg'
import Logout from '../../../public/logout-icon.svg'

/**
 * Sidebar that links to different pages
 * and events of the application.
 */
export default function Sidebar(): JSX.Element {
	const buttonStyles = 'w-full aspect-square flex justify-center items-center mx-8 hover:bg-neutral-100'
	return (
		<aside className='flex flex-col justify-between items-center w-max h-screen'>
			<div className='flex flex-col items-center'>
                <WingsterLogo />
				<Button src={HouseIcon} alt='House Icon' buttonStyles={buttonStyles} />
				<Button src={BowlIcon} alt='Bowl Icon' buttonStyles={buttonStyles} />
				<Button src={DollarSign} alt='Dollar Sign Icon' buttonStyles={buttonStyles} />
				<Button src={CashRegister} alt='Cash Register Icon' buttonStyles={buttonStyles} />
				<button className={`${buttonStyles} text-xl text-icon-color`}>ENG</button>
			</div>
			<Button src={Logout} alt='Logout Icon' buttonStyles={buttonStyles} />
		</aside>
	)
}
