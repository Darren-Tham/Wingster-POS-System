// React
import type { Dispatch, SetStateAction, MutableRefObject } from "react"

/**
 * Props for `AddCategoryCancelButton`.
 */
type Props = {
  buttonStyles: string
  setShowCategoryPopup: Dispatch<SetStateAction<boolean>>
  inputRef: MutableRefObject<HTMLInputElement | null>
}

/**
 * Button for `AddCategoryPopup` that closes
 * the popup.
 *
 * @param buttonStyles general styles for the button
 * @param setShowCategoryPopup sets the boolean `showCategoryPopup`
 *                             to `false`
 * @param inputRef reference to the input element
 * @returns `AddCategoryCancelButton` component
 */
export default function AddCategoryCancelButton({
  buttonStyles,
  setShowCategoryPopup,
  inputRef
}: Props) {
  return (
    <button
      className={`${buttonStyles} from-red-400 to-red-500`}
      onClick={() => {
        setShowCategoryPopup(false)
        if (inputRef.current !== null) inputRef.current.value = ""
      }}
    >
      Cancel
    </button>
  )
}
