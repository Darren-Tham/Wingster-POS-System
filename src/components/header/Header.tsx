// Components
import Date from "./Date"
import SearchBar from "./SearchBar"

/**
 * Props for the `Header` component.
 */
type Props = {
  showDate: boolean
  showSearchBar: boolean
}

/**
 * Main header of each page.
 *
 * @param showDate boolean determining whether to
 *                 show the date in `Header`
 * @param showSearchBar boolean determing whether to
 *                      show the search bar in `Header`
 * @returns `Header` component
 */
export default function Header({ showDate, showSearchBar }: Props) {
  return (
    <header className="flex justify-between">
      <div>
        <span className="font-bold text-5xl block mb-2">안녕하세요!</span>
        <span className="text-2xl text-main-blue">Wingster </span>
        <span className="text-2xl">Wings & K-Food</span>
      </div>
      <div>
        {showDate && <Date />}
        {showSearchBar && <SearchBar />}
      </div>
    </header>
  )
}
