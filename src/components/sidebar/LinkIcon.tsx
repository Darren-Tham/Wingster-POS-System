// Next
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

// Components 
import SelectionBar from "./SelectionBar";

type Props = {
  href: string;
  src: StaticImageData;
  alt: string;
  iconStyles: string;
  isSelected: boolean;
};

/**
 * Link element with Icon that links to
 * another page in `Sidebar`.
 * 
 * @param Props `LinkIcon` props
 * @returns `LinkIcon` component
 */
export default function LinkIcon({
  href,
  src,
  alt,
  iconStyles,
  isSelected,
}: Props) {
    return (
        <Link className={iconStyles} href={href}>
            <Image src={src} alt={alt} />
            {isSelected && <SelectionBar/>}
        </Link>
    )
}
