// Components
import Bar from "./Bar"

/**
 * Bars that displays all the
 * categories in `CategoryBars`.
 *
 * @returns `Bars` component
 */
export default function Bars() {
  return (
    <div className="flex overflow-x-auto">
      <Bar name="All" />
      <Bar name="Appetizer" />
      <Bar name="Entrees" />
      <Bar name="Desserts" />
      <Bar name="Drinks" />
    </div>
  )
}
