// React
import { JSX } from 'react'

type Props = {
	value: string
	cellStyles: string
}

export default function ButtonCell({ value, cellStyles }: Props): JSX.Element {
	return <button className={`${cellStyles} bg-white`}>{value}</button>
}
