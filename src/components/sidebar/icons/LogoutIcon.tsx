// SVG
import LogoutSVG from '@public/logout-icon.svg'

// Components
import ButtonIcon from '@components/sidebar/ButtonIcon'

/**
 * Props for `LogoutIcon` component.
 */
type Props = {
	iconStyles: string
}

/**
 * Logout Icon in `Sidebar`. Logs out
 * of the application.
 *
 * @param iconStyles general styling of the icon
 * @returns `LogoutIcon` component
 */
export default function LogoutIcon({ iconStyles }: Props) {
	return <ButtonIcon src={LogoutSVG} alt='Logout Icon' iconStyles={iconStyles} />
}
