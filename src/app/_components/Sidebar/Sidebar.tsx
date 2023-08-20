// React
import { JSX } from 'react'

// Next
import Image from 'next/image'

// Icons
import WingsterIcon from '../../../../public/wingster-icon.png'
import HouseIcon from '../../../../public/house-icon.svg'
import BowlIcon from '../../../../public/bowl-icon.svg'
import DollarSign from '../../../../public/dollar-sign-icon.svg'
import CashRegister from '../../../../public/cash-register-icon.svg'
import Logout from '../../../../public/logout-icon.svg'

export default function Sidebar(): JSX.Element {
	return (
		<aside className='flex flex-col justify-between items-center w-max h-screen px-4 py-8'>
            <div className='flex flex-col items-center gap-16'>
                <Image width="70" height="70" src={WingsterIcon} alt='Wingster Icon' unoptimized />
                <Image src={HouseIcon} alt='House Icon' />
                <Image src={BowlIcon} alt='Bowl Icon' />
                <Image src={DollarSign} alt='Dollar Sign Icon' />
                <Image src={CashRegister} alt='Cash Register Icon' />
                <span className="text-xl text-icon-color">ENG</span>
            </div>
			<Image src={Logout} alt='Logout Icon' />
		</aside>
	)
}
