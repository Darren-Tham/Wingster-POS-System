/**
 * Props for `LanguageIcon` component.
 */
type Props = {
    iconStyles: string
}

/**
 * Lanuage Icon in `Sidebar`. Toggles
 * different languages for the application.
 *
 * @param iconStyles general styling of the icon
 * @returns `LanguageIcon` component
 */
export default function LanguageIcon({ iconStyles }: Props) {
	return <button className={`${iconStyles} text-xl text-icon-color`}>ENG</button>
}
