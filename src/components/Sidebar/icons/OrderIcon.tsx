// SVG
import OrderGraySVG from '@public/order-gray-icon.svg'
import OrderBlueSVG from '@public/order-blue-icon.svg'

// Components
import ButtonIcon from '@components/sidebar/ButtonIcon'

type Props = {
	isSelected: boolean
	buttonStyles: string
}

/**
 * Order Icon in `Sidebar`. Redirects
 * to the `Order` page.
 *
 * @param Props `OrderIcon` props
 * @returns `OrderIcon` component
 */
export default function OrderIcon({ isSelected, buttonStyles }: Props) {
    return <ButtonIcon src={isSelected ? OrderBlueSVG : OrderGraySVG} alt="Order Icon" buttonStyles={buttonStyles} isSelected={isSelected} />
}
