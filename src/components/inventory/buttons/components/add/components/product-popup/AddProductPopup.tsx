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
import ChoosePicButton from "./components /choosePic-button/ChoosePicButton"
import GeneratePicButton from "./components /generatePic-Button/GeneratePic-Button"

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
    "bg-gradient-to-br text-white text-xs brightness-100 hover:brightness-95 drop-shadow-md rounded-lg p-3 transition-all duration-300"
  return (
    <>
      <BackgroundBlur showCategoryPopup={showProductPopup} />
      <div
        className={`fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white drop-shadow-md rounded-xl p-7 gap-7 flex flex-col items-center w-max transition-all duration-500 ${
          showProductPopup
            ? "visible opacity-1 scale-1"
            : "invisible opacity-0 scale-75"
        }`}
      >
        <div className=" flex gap-7">
          <div className="flex flex-col gap-7">
            <span className="text-5xl"> New Product</span>
            <div className="bg-gray-100 drop-shadow-md rounded-xl p-7 gap-7 flex flex-col justify-center items-center w-full transition-all duration-500">
              <Image
                src={questionMark}
                alt="Question Mark"
                width={100}
                height={100}
              />
            </div>
            <div className="grid grid-cols-2 w-full gap-7 ">
              <ChoosePicButton buttonStyles={buttonStyles} />
              <GeneratePicButton buttonStyles={buttonStyles} />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <AddProductInput inputRef={nameInputRef} />
            <DescriptionInput inputRef={descriptionInputRef} />
            <CategoryInput inputRef={categoryInputRef} />
            <PriceInput inputRef={priceInputRef} />
          </div>
        </div>
        <div className="grid grid-cols-2 w-full gap-7">
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
