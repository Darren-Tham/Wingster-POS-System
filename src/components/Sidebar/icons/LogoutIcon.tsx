// SVG
import LogoutSVG from '@public/logout-icon.svg'

// Components
import ButtonIcon from '@components/sidebar/ButtonIcon'

type Props = {
	iconStyles: string
}

/**
 * Logout Icon in `Sidebar`. Logs out
 * of the application.
 * @param Props `LogoutIcon` props
 * @returns `LogoutIcon` component
 */
export default function LogoutIcon({ iconStyles }: Props) {
	return <ButtonIcon src={LogoutSVG} alt='Logout Icon' iconStyles={iconStyles} />
}
