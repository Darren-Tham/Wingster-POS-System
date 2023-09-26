// Components
import HeaderCell from "./components/HeaderCell"
import ButtonCell from "./components/ButtonCell"

/**
 * Type that describe the name of
 * `ButtonCell` and the `href` of the
 * page it links to.
 */
type ButtonCell = {
  name: string
  href: string
}

/**
 * Returns the Header cells for
 * the grid in the Home page.
 *
 * @param headerCells names of the header cells
 * @param cellStyles general style of the cell
 * @returns array of `HeaderCell` components
 */
function getHeaderCells(headerCells: string[], cellStyles: string) {
  return headerCells.map(name => (
    <HeaderCell key={name} name={name} cellStyles={cellStyles} />
  ))
}

/**
 * Returns the Button cells for
 * the grid in the Home page.
 *
 * @param buttonCells object of the button cells
 * @param cellStyles general style of the cell
 * @returns array of `ButtonCell` components
 */
function getButtonCells(buttonCells: ButtonCell[], cellStyles: string) {
  return buttonCells.map(({ name, href }) => (
    <ButtonCell key={name} name={name} href={href} cellStyles={cellStyles} />
  ))
}

/**
 * Grid that links to different pages
 * of the application for the `Home` page.
 *
 * @returns `Grid` component
 */
export default function Grid() {
  const headerCells = ["Orders", " Payments", "History", "Settings"]
  const buttonCells: ButtonCell[] = [
    { name: "Quick Order", href: "/" },
    { name: "Tender", href: "/" },
    { name: "Order History", href: "/" },
    { name: "Inventory Settings", href: "/inventory" },
    { name: "Cosmic Order", href: "/" },
    { name: "Pay Out", href: "/" },
    { name: "System History", href: "/" },
    { name: "User Settings", href: "/" },
    { name: "Catering + Schedule", href: "/" },
    { name: "Open Cash Drawer", href: "/" },
    { name: "Trends", href: "/" },
    { name: "Time Card", href: "/" }
  ]
  const cellStyles =
    "max-sm:text-sm sm:text-md md:text-xl lg:text-2xl xl:text-3xl rounded-xl drop-shadow-md p-6 w-full h-full flex justify-center items-center text-center"

  return (
    <section className="grid grid-rows-4 grid-cols-4 grow gap-3 place-items-center">
      {getHeaderCells(headerCells, cellStyles)}
      {getButtonCells(buttonCells, cellStyles)}
    </section>
  )
}
