// React
import { Dispatch, SetStateAction } from "react"

/**
 * Props for `AddCategoryPopup`.
 */
type Props = {
  showCategoryPopup: boolean
  setShowCategoryPopup: Dispatch<SetStateAction<boolean>>
}

/**
 * Shows the popup window for the user
 * to add a new category to the `CategoryBar`.
 *
 * @param showCategoryPopup determines whether the `AddCategoryPopup`
 *                          component is visible
 * @param setShowCategoryPopup sets the boolean `showCategoryPopup`
 * @returns `AddCategoryPopup` component
 */
export default function AddCategoryPopup({
  showCategoryPopup,
  setShowCategoryPopup
}: Props) {
  const buttonStyles =
    "bg-gradient-to-br text-white text-2xl hover:opacity-95 drop-shadow-md rounded-lg p-3"
  return (
    <>
      <div
        className={`fixed inset-0 bg-opacity-20 ${
          showCategoryPopup
            ? "visible backdrop-blur-sm bg-black"
            : "invisible"
        } transition-all duration-500`}
      />
      <div
        className={`fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white drop-shadow-md rounded-lg p-7 flex flex-col gap-7 w-max transition-all duration-500 ${
          showCategoryPopup
            ? "visible opacity-1 scale-1"
            : "invisible opacity-0 scale-75"
        }`}
      >
        <span className="text-5xl">New Category</span>
        <input
          className="border-solid border-2 border-gray-100 placeholder:text-neutral-300 text-xl outline-none drop-shadow-md bg-white rounded-md p-3 w-full"
          placeholder="Enter new category name..."
        />
        <div className="grid grid-cols-2 gap-7">
          <button
            className={`${buttonStyles} from-red-400 to-red-500`}
            onClick={() => setShowCategoryPopup(false)}
          >
            Cancel
          </button>
          <button
            className={`${buttonStyles} from-main-light-blue to-main-blue`}
          >
            Save
          </button>
        </div>
      </div>
    </>
  )
}
