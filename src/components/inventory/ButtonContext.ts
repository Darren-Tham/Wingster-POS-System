"use client"

import { createContext } from "react"

type ButtonStyles = {
  circleStyles: string
  imgSize: number
  popupContainerStyles: string
  popupEntryStyles: string
}

const ButtonContext = createContext<ButtonStyles>({
  circleStyles: "",
  imgSize: 0,
  popupContainerStyles: "",
  popupEntryStyles: ""
})
export default ButtonContext
