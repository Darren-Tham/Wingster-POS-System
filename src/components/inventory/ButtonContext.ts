"use client"

import { createContext } from "react"

type ButtonStyles = {
  buttonStyles: string
  imgSize: number
}

const ButtonContext = createContext<ButtonStyles>({
  buttonStyles: "",
  imgSize: 0
})
export default ButtonContext
