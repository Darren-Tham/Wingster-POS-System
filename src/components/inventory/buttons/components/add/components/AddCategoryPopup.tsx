// React
import { type Dispatch, type SetStateAction, useRef } from "react"

// Components
import BackgroundBlur from "./components/background-blur/BackgroundBlur"
import AddCategoryInput from "./components/input/AddCategoryInput"
import AddCategoryCancelButton from "./components/cancel-button/AddCategoryCancelButton"
import AddCategorySaveButton from "./components/save-button/AddCategorySaveButton"

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
  const inputRef = useRef<HTMLInputElement | null>(null)
  const buttonStyles =
    "bg-gradient-to-br text-white text-2xl brightness-100 hover:brightness-95 drop-shadow-md rounded-lg p-3 transition-all duration-300"
  return (
    <>
      <BackgroundBlur showCategoryPopup={showCategoryPopup} />
      <div
        className={`fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white drop-shadow-md rounded-xl p-7 flex flex-col gap-7 w-max transition-all duration-500 ${
          showCategoryPopup
            ? "visible opacity-1 scale-1"
            : "invisible opacity-0 scale-75"
        }`}
      >
        <span className="text-5xl">New Category</span>
        <AddCategoryInput inputRef={inputRef} />
        <div className="grid grid-cols-2 gap-7">
          <AddCategoryCancelButton
            buttonStyles={buttonStyles}
            setShowCategoryPopup={setShowCategoryPopup}
            inputRef={inputRef}
          />
          <AddCategorySaveButton buttonStyles={buttonStyles} />
        </div>
      </div>
    </>
  )
}
