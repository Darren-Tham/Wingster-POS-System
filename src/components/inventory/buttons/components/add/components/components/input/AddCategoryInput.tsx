/**
 * Input for the component `AddCategoryPopup`.
 *
 * @returns `AddCategoryInput` component.
 */
export default function AddCategoryInput() {
  return (
    <input
      className="border-solid border-2 border-neutral-100 placeholder:text-neutral-300 text-xl outline-none drop-shadow-md bg-white rounded-lg p-3 w-full"
      placeholder="Enter new category name..."
    />
  )
}
