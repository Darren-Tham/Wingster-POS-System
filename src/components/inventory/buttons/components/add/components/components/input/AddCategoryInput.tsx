import type { MutableRefObject } from "react"

/**
 * Props for `AddCategoryInput`.
 */
type Props = {
  inputRef: MutableRefObject<HTMLInputElement | null>
}

/**
 * Input for the component `AddCategoryPopup`.
 *
 * @param inputRef reference to the input element
 * @returns `AddCategoryInput` component.
 */
export default function AddCategoryInput({ inputRef }: Props) {
  return (
    <input
      className="border-solid border-[3px] border-neutral-300 placeholder:text-neutral-300 text-xl outline-none bg-white rounded-xl p-3 w-full"
      placeholder="Enter new category name..."
      ref={inputRef}
    />
  )
}
