// SVG
import OrderGraySVG from "@public/order-gray-icon.svg"
import OrderBlueSVG from "@public/order-blue-icon.svg"

// Components
import LinkIcon from "../LinkIcon"

/**
 * Props for `OrderIcon` component.
 */
type Props = { isSelected: boolean }

/**
 * Order Icon in `Sidebar`. Redirects
 * to the `Order` page.
 *
 * @param isSelected boolean determining whether the
 *                   icon is selected
 * @returns `OrderIcon` component
 */
export default function OrderIcon({ isSelected }: Props) {
  return (
    <LinkIcon
      src={isSelected ? OrderBlueSVG : OrderGraySVG}
      alt="Order Icon"
      href="/"
      isSelected={isSelected}
    />
  )
}
