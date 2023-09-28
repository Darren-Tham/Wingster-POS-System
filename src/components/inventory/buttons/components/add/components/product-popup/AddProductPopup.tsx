import { type Dispatch, type SetStateAction, useRef } from "react"

// Components
import BackgroundBlur from "../category-popup/components/background-blur/BackgroundBlur"
import AddProductInput from "./components /input/AddProductInput"
import AddProductCancelButton from "./components /cancel-button/AddProductCancelButton"
import AddCategorySaveButton from "../category-popup/components/save-button/AddCategorySaveButton"
import AddProductSaveButton from "./components /save-button/AddProductSaveButton"

// Next
import Image from "next/image"

//svg
import questionMark from "@public/question-mark-svgrepo-com.svg"
import DescriptionInput from "./components /input/DescriptionInput"
import CategoryInput from "./components /input/categoryInput"
import PriceInput from "./components /input/PriceInput"

/**
 * Props for 'AddProductPopup'.
 */
type Props = {
  showProductPopup: boolean
  setShowProductPopup: Dispatch<SetStateAction<boolean>>
}
export default function AddProductPopup({
  showProductPopup,
  setShowProductPopup
}: Props) {
  const nameInputRef = useRef<HTMLInputElement | null>(null)
  const descriptionInputRef = useRef<HTMLInputElement | null>(null)
  const categoryInputRef = useRef<HTMLInputElement | null>(null)
  const priceInputRef = useRef<HTMLInputElement | null>(null)

  const buttonStyles =
    "bg-gradient-to-br text-white text-2xl brightness-100 hover:brightness-95 drop-shadow-md rounded-lg p-3 transition-all duration-300"
  return (
    <>
      <BackgroundBlur showCategoryPopup={showProductPopup} />
      <div
        className={`fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white drop-shadow-md rounded-xl p-7 flex flex-col items-center gap-7 w-max transition-all duration-500 ${
          showProductPopup
            ? "visible opacity-1 scale-1"
            : "invisible opacity-0 scale-75"
        }`}
      >
        <span className="text-5xl">New Product</span>
        <div className="bg-gray-100 drop-shadow-md rounded-xl p-7 flex flex-col justify-center items-center gap-7 w-full aspect-square transition-all duration-500">
          <Image
            src={questionMark}
            alt="Question mark"
            width={100}
            height={100}
          />
          <div className="grid grid-cols-2 gap-7 w-full">
            <AddProductCancelButton
              buttonStyles={buttonStyles}
              setShowProductPopup={setShowProductPopup}
              inputRef={nameInputRef}
            />
            <AddProductSaveButton buttonStyles={buttonStyles} />
          </div>
        </div>

        <AddProductInput inputRef={nameInputRef} />
        <DescriptionInput inputRef={descriptionInputRef} />
        <CategoryInput inputRef={categoryInputRef} />
        <PriceInput inputRef={priceInputRef} />
        <div className="grid grid-cols-2 gap-7 w-full">
          <AddProductCancelButton
            buttonStyles={buttonStyles}
            setShowProductPopup={setShowProductPopup}
            inputRef={nameInputRef}
          />
          <AddProductSaveButton buttonStyles={buttonStyles} />
        </div>
      </div>
    </>
  )
}
