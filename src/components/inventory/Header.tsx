// Components
import SearchBar from "../header/SearchBar"

/**
 * Header for the `Inventory` page.
 *
 * @returns `Header` component
 */
export default function Header() {
  return (
    <header className="flex justify-between">
      <span className="text-5xl">Inventory</span>
      <SearchBar />
    </header>
  )
}
