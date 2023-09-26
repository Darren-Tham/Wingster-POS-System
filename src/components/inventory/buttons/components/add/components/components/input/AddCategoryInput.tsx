/**
 * Input for the component `AddCategoryPopup`.
 *
 * @returns `AddCategoryInput` component.
 */
export default function AddCategoryInput() {
  return (
    <input
      className="border-solid border-2 border-gray-100 placeholder:text-neutral-300 text-xl outline-none drop-shadow-md bg-white rounded-md p-3 w-full"
      placeholder="Enter new category name..."
    />
  )
}
