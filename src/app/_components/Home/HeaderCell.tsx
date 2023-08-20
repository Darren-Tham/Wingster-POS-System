// React
import { JSX } from 'react'

type Props = {
    value: string
    cellStyles: string
}

export default function HeaderCell({ value, cellStyles }: Props): JSX.Element {
    return <div className={`${cellStyles} flex justify-center items-center bg-gradient-to-br from-main-light-blue to-main-blue text-white select-none cursor-default`}>{value}</div>
}
