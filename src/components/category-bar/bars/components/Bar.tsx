/**
 * Props for `Bar` component.
 */
type Props = {
  name: string
}

/**
 * Bar in `CategoryBar` that labels
 * the category.
 *
 * @param name name of category
 * @returns `Bar` component
 */
export default function Bar({ name }: Props) {
  return (
    <button className="bg-white p-3 hover:bg-neutral-100 transition-colors duration-300 grow">
      <span className="inline-block min-w-[10rem]">{name}</span>
    </button>
  )
}
