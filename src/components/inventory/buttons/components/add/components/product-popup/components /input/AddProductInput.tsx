import type { MutableRefObject } from "react"

/**
 * Props for `AddProductInput`.
 */
type Props = {
  inputRef: MutableRefObject<HTMLInputElement | null>
}

/**
 * Input for the component `AddProductPopup`.
 * 
 * @param inputRef reference to the input element
 * @returns `AddProductInput` component
 */
export default function AddProductInput({ inputRef }: Props) {
  return (
    <input
      className="border-solid border-[3px] border-neutral-300 placeholder:text-neutral-300 text xl outline-none bg-white rounded-xl p-3 w-full"
      placeholder="Enter new product name..."
      ref={inputRef}
      />
  )
}