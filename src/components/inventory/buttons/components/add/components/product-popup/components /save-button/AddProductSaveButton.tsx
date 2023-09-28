/**
 * Props for `AddProductSaveButton`.
 */
type Props = {
  buttonStyles: string
}

/**
 * Button for `AddProductPopup` that saves 
 * the user's new product into the database. 
 * 
 * @param buttonStyles general styles for the button
 * @returns `AddProductSaveButton` component
 */
export default function AddProductSaveButton({ buttonStyles }: Props) {
  return (
    <button className={`${buttonStyles} from-main-light-blue to-main-blue`}>
      Save
    </button>
  )
}