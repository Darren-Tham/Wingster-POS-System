// SVG
import TenderGraySVG from '@public/tender-gray-icon.svg'
import TenderBlueSVG from '@public/tender-blue-icon.svg'

// Components
import LinkIcon from '../LinkIcon'

/**
 * Props for `TenderIcon` component.
 */
type Props = { isSelected: boolean }

/**
 * Tender Icon in `Sidebar`. Redirects
 * to `Tender` page.
 *
 * @param isSelected boolean determining whether the
 *                   icon is selected
 * @returns `TenderIcon` component
 */
export default function TenderIcon({ isSelected }: Props) {
	return <LinkIcon src={isSelected ? TenderBlueSVG : TenderGraySVG} alt='Tender Icon' href='/' isSelected={isSelected} />
}
