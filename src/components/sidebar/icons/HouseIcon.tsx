// Components
import LinkIcon from "../LinkIcon"

// SVG
import HouseGraySVG from "@public/house-gray-icon.svg"
import HouseBlueSVG from "@public/house-blue-icon.svg"

/**
 * Props for `HouseIcon` component.
 */
type Props = { isSelected: boolean }

/**
 * House Icon in `Sidebar`. Redirects
 * to the `Home` page.
 *
 * @param isSelected boolean determining whether the
 *                   icon is selected
 * @returns `HouseIcon` component
 */
export default function HouseIcon({ isSelected }: Props) {
  return (
    <LinkIcon
      src={isSelected ? HouseBlueSVG : HouseGraySVG}
      alt="House Icon"
      href="/"
      isSelected={isSelected}
    />
  )
}
