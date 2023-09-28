/**
 * Props for `AddCategorySaveButton`.
 */
type Props = {
  buttonStyles: string
}

/**
 * Button for `AddCategoryPopup` that saves
 * the user's new category into the database.
 *
 * @param buttonStyles general styles for the button
 * @returns `AddCategorySaveButton` component
 */
export default function AddCategorySaveButton({ buttonStyles }: Props) {
  return (
    <button className={`${buttonStyles} from-main-light-blue to-main-blue`}>
      Save
    </button>
  )
}
