type Props = {
    iconStyles: string
}

/**
 * Lanuage Icon in `Sidebar`. Toggles
 * different languages for the application.
 *
 * @param Props `LanguageIcon` props
 * @returns `LanguageIcon` component
 */
export default function LanguageIcon({ iconStyles }: Props) {
	return <button className={`${iconStyles} text-xl text-icon-color`}>ENG</button>
}
