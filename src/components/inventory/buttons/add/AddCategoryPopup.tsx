export default function AddCategoryPopup() {
  return (
    <header className="fixed inset-0 flex items-center justify-center">
      <div className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-20" />
      <div className="bg-white drop-shadow-md rounded-lg p-6 flex flex-col gap-7">
        <span className="text-5xl">New Category</span>
        <input
          className="border border-gray-100 placeholder:text-neutral-300 text-xl outline-none drop-shadow-lg bg-white rounded-md block p-3 w-full"
          placeholder="Enter new category name..."
        />
        <div className="flex justify-between">
          <button className="bg-gradient-to-br from-red-400 to-red-500 text-white text-2xl hover:opacity-90 drop-shadow-md rounded-lg w-40 p-3">
            Cancel
          </button>
          <button className="bg-gradient-to-br from-main-light-blue to-main-blue text-white text-2xl hover:opacity-90 selection:drop-shadow-md rounded-lg w-40 p-3">
            Save
          </button>
        </div>
      </div>
    </header>
  )
}
