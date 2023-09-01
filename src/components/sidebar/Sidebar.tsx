'use client'

// Context
import IconContext from '@/context/IconContext'

// Components
import WingsterLogo from '@components/sidebar/icons/WingsterLogo'
import HouseIcon from '@components/sidebar/icons/HouseIcon'
import OrderIcon from '@components/sidebar/icons/OrderIcon'
import TenderIcon from '@components/sidebar/icons/TenderIcon'
import CashRegisterIcon from '@components/sidebar/icons/CashRegisterIcon'
import LanguageIcon from '@components/sidebar/icons/LanguageIcon'
import LogoutIcon from '@components/sidebar/icons/LogoutIcon'

// Enums
import { SelectedIcons } from '@/lib/Enums'

/**
 * Props for the `Sidebar` component.
 */
type Props = {
	currentIcon?: SelectedIcons
}

/**
 * Sidebar that links to different pages
 * and events of the application.
 *
 * @param currentIcon current icon being selected
 * @returns `Sidebar` component
 */
export default function Sidebar({ currentIcon }: Props) {
	const iconStyles = 'w-full aspect-square flex justify-center items-center mx-8 hover:bg-neutral-100 relative'
	return (
		<aside className='flex flex-col justify-between items-center w-max h-screen'>
			<IconContext.Provider value={iconStyles}>
				<div className='flex flex-col items-center'>
					<WingsterLogo />
					<HouseIcon isSelected={SelectedIcons.House === currentIcon} />
					<OrderIcon isSelected={SelectedIcons.Order === currentIcon} />
					<TenderIcon isSelected={SelectedIcons.Order === currentIcon} />
					<CashRegisterIcon />
					<LanguageIcon />
				</div>
				<LogoutIcon />
			</IconContext.Provider>
		</aside>
	)
}
