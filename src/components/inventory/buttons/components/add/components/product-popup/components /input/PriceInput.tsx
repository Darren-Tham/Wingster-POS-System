import type { MutableRefObject } from "react"

/**
 * Props for `DescriptionInput`.
 */
type Props = {
  inputRef: MutableRefObject<HTMLInputElement | null>
}

/**
 * Input for the component `DescriptionInput`.
 *
 * @param inputRef reference to the input element
 * @returns `DescriptionInput` component
 */
export default function PriceInput({ inputRef }: Props) {
  return (
    <input
      className="border-solid border-[3px] border-neutral-300 placeholder:text-neutral-300 text xl outline-none bg-white rounded-xl p-3 w-full"
      placeholder="New Product Price..."
      ref={inputRef}
    />
  )
}
