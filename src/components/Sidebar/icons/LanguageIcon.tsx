type Props = {
    buttonStyles: string
}

/**
 * Lanuage Icon in `Sidebar`. Toggles
 * different languages for the application.
 *
 * @param Props `LanguageIcon` props
 * @returns `LanguageIcon` component
 */
export default function LanguageIcon({ buttonStyles }: Props) {
	return <button className={`${buttonStyles} text-xl text-icon-color`}>ENG</button>
}
