// React
import type { Dispatch, SetStateAction } from "react"

/**
 * Props for `AddCategoryCancelButton`.
 */
type Props = {
  buttonStyles: string
  setShowCategoryPopup: Dispatch<SetStateAction<boolean>>
}

/**
 * Button for `AddCategoryPopup` that closes
 * the popup.
 *
 * @param buttonStyles general styles for the button
 * @param setShowCategoryPopup sets the boolean `showCategoryPopup`
 *                             to `false`
 * @returns `AddCategoryCancelButton` component
 */
export default function AddCategoryCancelButton({
  buttonStyles,
  setShowCategoryPopup
}: Props) {
  return (
    <button
      className={`${buttonStyles} from-red-400 to-red-500`}
      onClick={() => setShowCategoryPopup(false)}
    >
      Cancel
    </button>
  )
}
