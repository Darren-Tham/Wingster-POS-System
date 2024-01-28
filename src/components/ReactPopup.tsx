"use client"

import { CSSProperties, MutableRefObject, useEffect, useState } from "react"
import Popup from "reactjs-popup"
import { PopupActions, PopupProps } from "reactjs-popup/dist/types"

type Props = PopupProps & {
  trigger: JSX.Element
  blur?: boolean
  popupRef?: MutableRefObject<PopupActions>
}

export default function ReactPopup(props: Readonly<Props>) {
  const [load, setLoad] = useState(false)

  useEffect(() => {
    setLoad(true)
  }, [])

  const overlayStyle: CSSProperties | undefined = props.blur
    ? {
        backgroundColor: "rgba(0,0,0,0.25)",
        backdropFilter: "blur(4px)"
      }
    : undefined

  return load ? (
    <Popup {...props} overlayStyle={overlayStyle} ref={props.popupRef} />
  ) : (
    props.trigger
  )
}
