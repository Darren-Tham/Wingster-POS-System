// SVG
import OrderGraySVG from "@public/order-gray-icon.svg";
import OrderBlueSVG from "@public/order-blue-icon.svg";

// Components
import LinkIcon from "../LinkIcon";

type Props = {
  isSelected: boolean;
  iconStyles: string;
};

/**
 * Order Icon in `Sidebar`. Redirects
 * to the `Order` page.
 *
 * @param Props `OrderIcon` props
 * @returns `OrderIcon` component
 */
export default function OrderIcon({ isSelected, iconStyles }: Props) {
  return (
    <LinkIcon
      src={isSelected ? OrderBlueSVG : OrderGraySVG}
      alt="Order Icon"
      href="/"
      iconStyles={iconStyles}
      isSelected={isSelected}
    />
  );
}
