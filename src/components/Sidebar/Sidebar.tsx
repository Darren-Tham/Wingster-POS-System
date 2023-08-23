'use client'

// Components
import ButtonIcon from './ButtonIcon'
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
export default function Sidebar() {
	const buttonStyles = 'w-full aspect-square flex justify-center items-center mx-8 hover:bg-neutral-100 relative'
	return (
		<aside className='flex flex-col justify-between items-center w-max h-screen'>
			<div className='flex flex-col items-center'>
				<WingsterLogo />
				<ButtonIcon src={HouseIcon} alt='House Icon' buttonStyles={buttonStyles} isSelected={true} />
				<ButtonIcon src={BowlIcon} alt='Bowl Icon' buttonStyles={buttonStyles} isSelected={false} />
				<ButtonIcon src={DollarSign} alt='Dollar Sign Icon' buttonStyles={buttonStyles} isSelected={false} />
				<ButtonIcon src={CashRegister} alt='Cash Register Icon' buttonStyles={buttonStyles} isSelected={false} />
				<button className={`${buttonStyles} text-xl text-icon-color`}>ENG</button>
			</div>
			<ButtonIcon src={Logout} alt='Logout Icon' buttonStyles={buttonStyles} isSelected={false} />
		</aside>
	)
}
