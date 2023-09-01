// Components
import LinkIcon from '../LinkIcon'

// SVG
import HouseGraySVG from '@public/house-gray-icon.svg'
import HouseBlueSVG from '@public/house-blue-icon.svg'

/**
 * Props for `HouseIcon` component.
 */
type Props = {
	isSelected: boolean
	iconStyles: string
}

/**
 * House Icon in `Sidebar`. Redirects
 * to the `Home` page.
 *
 * @param isSelected boolean determining whether the
 *                   icon is seleted
 * @param iconStyles general styling of the icon
 * @returns `HouseIcon` component
 */
export default function HouseIcon({ isSelected, iconStyles }: Props) {
	return <LinkIcon src={isSelected ? HouseBlueSVG : HouseGraySVG} alt='House Icon' href='/' iconStyles={iconStyles} isSelected={isSelected} />
}
