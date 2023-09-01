// SVG
import CashRegisterSVG from '@public/cash-register-icon.svg'

// Components
import ButtonIcon from '@components/sidebar/ButtonIcon'

/**
 * Props for `CashRegisterIcon` component.
 */
type Props = {
	iconStyles: string
}

/**
 * Cash Register Icon in `Sidebar`. Opens
 * the Cash Register.
 *
 * @param iconStyles general styling of the icon
 * @returns `CashRegisterIcon` component
 */
export default function CashRegisterIcon({ iconStyles }: Props) {
	return <ButtonIcon src={CashRegisterSVG} alt='Cash Register Icon' iconStyles={iconStyles} />
}
