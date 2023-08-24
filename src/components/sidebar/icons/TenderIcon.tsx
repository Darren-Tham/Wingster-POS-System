// SVG
import TenderGraySVG from "@public/tender-gray-icon.svg";
import TenderBlueSVG from "@public/tender-blue-icon.svg";

// Components
import LinkIcon from "../LinkIcon";
import Link from "next/link";

type Props = {
  isSelected: boolean;
  iconStyles: string;
};

/**
 * Tender Icon in `Sidebar`. Redirects
 * to `Tender` page.
 *
 * @param Props `TenderIcon` props
 * @returns `TenderIcon` component
 */
export default function TenderIcon({ isSelected, iconStyles }: Props) {
  return (
    <LinkIcon
      src={isSelected ? TenderBlueSVG : TenderGraySVG}
		  alt="Tender Icon"
		  href="/"
      iconStyles={iconStyles}
      isSelected={isSelected}
    />
  );
}
