/**
 * Props for `Popup` component.
 */
type Props = {
  showActionsPopup: boolean
  popupButtons: PopupButton[]
  textColor: string
  horizontalDirection: "left" | "right"
}

export type PopupButton = {
  name: string
  onClick: () => void
}

/**
 * A popup that displays different
 * actions the user can do.
 *
 * @param showPopup boolean determining the
 *                     visibility of a popup
 * @param popupButtons list of objects with the name of
 *                the button and the onclick event
 *                listener
 * @param textColor color of the popup button text
 * @param horizontalDirection the horizontal direction where
 *                            the popup appears
 * @returns `Popup` component
 */
export default function Popup({
  showActionsPopup: showPopup,
  popupButtons,
  textColor,
  horizontalDirection
}: Props) {
  return (
    <div
      className={`${
        showPopup ? "visible opacity-1" : "invisible opacity-0"
      } ${textColor} ${
        horizontalDirection === "left" ? "right-3/4" : "left-3/4"
      } absolute bg-white bottom-3/4 rounded-lg drop-shadow-md transition-all duration-500`}
      /**
       * Without this style, the transition with the drop-shadow will not work.
       * This trick is called `null transform hack`.
       *
       * @see https://stackoverflow.com/a/48748402/22490464
       * @see https://aerotwist.com/blog/on-translate3d-and-layer-creation-hacks/
       */
      style={{
        transform: `translate3d(0,0,0) scale(${showPopup ? 1 : 0.75})`
      }}
    >
      {getPopupButtonElements(popupButtons)}
    </div>
  )
}

/**
 * Returns the popup button
 * elements.
 *
 * @param popupButtons list of objects with the name of
 *                the button and the onclick event
 *                listener
 * @returns popup button elements
 */
function getPopupButtonElements(popupButtons: PopupButton[]) {
  return popupButtons.map(({ name, onClick }, i) => {
    let className =
      "w-64 p-3 hover:bg-neutral-100 transition-colors duration-300"
    if (i === 0) className += " rounded-t-lg"
    if (i === popupButtons.length - 1) className += " rounded-b-lg"
    return (
      <button className={className} key={name} onClick={onClick}>
        {name}
      </button>
    )
  })
}
