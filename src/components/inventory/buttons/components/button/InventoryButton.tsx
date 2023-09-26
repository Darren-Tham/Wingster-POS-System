"use client"

// Next
import Image, { StaticImageData } from "next/image"

// React
import { Dispatch, SetStateAction, useState, useEffect } from "react"

// Components
import Popup, { PopupButton } from "./components/Popup"
import PopupBlocker from "./components/PopupBlocker"

type Props = {
  src: StaticImageData
  alt: string
  popupButtons: PopupButton[]
  gradientColors: string
  textColor: string
  horizontalDirection: "left" | "right"
  showActionsPopup: boolean
  setShowActionPopup: Dispatch<SetStateAction<boolean>>
}

/**
 * Button that allows the user to
 * perform different actions in
 * the `Inventory` page.
 *
 * @param src source of the image
 * @param alt alternative text for the image
 * @param popupButtons list of objects with the name of
 *                the button and the onclick event
 *                listener
 * @param gradientColors gradient colors of the button
 * @param textColor color of the popup button text
 * @param horizontalDirection the horizontal direction where
 *                            the popup appears
 * @param showActionsPopup determines whether the actions buttons
 *                         are visible
 * @param setShowActionPopup sets the boolean `showActionsPopup`
 * @returns `Button` component
 */
export default function InventoryButton({
  src,
  alt,
  popupButtons,
  gradientColors,
  textColor,
  horizontalDirection,
  showActionsPopup,
  setShowActionPopup
}: Props) {
  const [outsideIsClicked, setOutsideIsClicked] = useState(false)

  useEffect(() => {
    if (showActionsPopup) setOutsideIsClicked(false)
  }, [showActionsPopup])

  return (
    <>
      <PopupBlocker
        showActionsPopup={showActionsPopup}
        setShowActionsPopup={setShowActionPopup}
        outsideIsClicked={outsideIsClicked}
        setOutsideIsClicked={setOutsideIsClicked}
      />
      <div
        className={`rounded-full relative ${
          showActionsPopup ? "z-20" : ""
        } select-none`}
      >
        <button
          className={`bg-gradient-to-br ${gradientColors} rounded-full p-2 drop-shadow-md brightness-100 hover:brightness-95 transition-all duration-300`}
          onClick={() => {
            if (showActionsPopup) setOutsideIsClicked(true)
            setShowActionPopup(!showActionsPopup)
          }}
        >
          <Image src={src} alt={alt} width={50} height={50} />
        </button>
        <Popup
          showActionsPopup={showActionsPopup}
          popupButtons={popupButtons}
          textColor={textColor}
          horizontalDirection={horizontalDirection}
        />
      </div>
    </>
  )
}
