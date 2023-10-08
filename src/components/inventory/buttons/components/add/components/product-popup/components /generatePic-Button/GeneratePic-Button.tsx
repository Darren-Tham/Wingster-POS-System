/**
 * Props for `GeneratePicButton`.
 */
type Props = {
  buttonStyles: string
}

/**
 * Button for `AddProductPopup` that saves
 * the user's new product into the database.
 *
 * @param buttonStyles general styles for the button
 * @returns `ChoosePicButton` component
 */
export default function GeneratePicButton({ buttonStyles }: Props) {
  return (
    <button className={`${buttonStyles} from-gray-300 to-gray-600`}>
      Generate Photo
    </button>
  )
}
