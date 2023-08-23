// Components
import ButtonIcon from "@components/sidebar/ButtonIcon"

// SVG
import HouseGraySVG from '@public/house-gray-icon.svg'
import HouseBlueSVG from '@public/house-blue-icon.svg'

type Props = {
    isSelected: boolean
    buttonStyles: string
}

/**
 * House Icon in `Sidebar`. Redirects
 * to the `Home` page.
 *
 * @param Props `HouseIcon` props
 * @returns `HouseIcon` component
 */
export default function HouseIcon({ isSelected, buttonStyles }: Props) {
    return <ButtonIcon src={isSelected ? HouseBlueSVG : HouseGraySVG} alt="House Icon" buttonStyles={buttonStyles} isSelected={isSelected} />
}
