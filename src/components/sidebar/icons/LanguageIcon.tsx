'use client'

// React
import { useContext } from 'react'

// Context
import IconContext from '@/context/IconContext'

/**
 * Lanuage Icon in `Sidebar`. Toggles
 * different languages for the application.
 *
 * @returns `LanguageIcon` component
 */
export default function LanguageIcon() {
	const iconStyles = useContext(IconContext)
	return <button className={`${iconStyles} text-xl text-icon-color`}>ENG</button>
}
