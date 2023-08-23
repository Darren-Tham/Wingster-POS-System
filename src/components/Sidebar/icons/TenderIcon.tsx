// SVG
import TenderGraySVG from '@public/tender-gray-icon.svg'
import TenderBlueSVG from '@public/tender-blue-icon.svg'

// Components
import ButtonIcon from '@components/sidebar/ButtonIcon'

type Props = {
	isSelected: boolean
	buttonStyles: string
}

/**
 * Tender Icon in `Sidebar`. Redirects
 * to `Tender` page.
 *
 * @param Props `TenderIcon` props
 * @returns `TenderIcon` component
 */
export default function TenderIcon({ isSelected, buttonStyles }: Props) {
	return <ButtonIcon src={isSelected ? TenderBlueSVG : TenderGraySVG} alt='Tender Icon' buttonStyles={buttonStyles} isSelected={isSelected} />
}
