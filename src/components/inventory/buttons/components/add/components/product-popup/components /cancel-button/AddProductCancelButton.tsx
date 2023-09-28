// react
import type { Dispatch, SetStateAction, MutableRefObject } from "react"

/**
 * Props for `AddProductCancelButton`.
 */
type Props = {
  buttonStyles: string
  setShowProductPopup: Dispatch<SetStateAction<boolean>>
  inputRef: MutableRefObject<HTMLInputElement | null>
}

/**
 * Button for `AddProductPopup` that closes
 * the popup.
 *
 * @param buttonStyles general styles for the  button
 * @param setShowProductPopup sets the boolean `showCateogryPopup`
 *                            to `false`
 * @param inputRef reference to the input element
 * @returns `AddProductCategoryButton` component 
 */
export default function AddProductCancelButton({
  buttonStyles, 
  setShowProductPopup, 
  inputRef
}: Props) {
  return (
    <button
      className={`${buttonStyles} from-red-400 to-red-500`}
      onClick={() => {
        setShowProductPopup(false)
        if (inputRef.current !== null) inputRef.current.value = ""
      }}
    >
      Cancel
      </button>
)
}
