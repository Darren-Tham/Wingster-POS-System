type Props = {
    value: string
    cellStyles: string
}

/**
 * Headers in the grid from the `Home`
 * page that describes the purpose of
 * each column.
 *
 * @param Props props of `HeaderCell`
 * @returns `HeaderCell` component
 */
export default function HeaderCell({ value, cellStyles }: Props) {
    return <div className={`${cellStyles} flex justify-center items-center bg-gradient-to-br from-main-light-blue to-main-blue text-white select-none cursor-default`}>{value}</div>
}
