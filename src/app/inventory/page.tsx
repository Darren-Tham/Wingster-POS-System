// Components
import Header from "@/components/header/Header"
import Sidebar from "@/components/sidebar/Sidebar"
import CategoryBar from "@/components/category-bar/CategoryBar"
import InventoryButtons from "@/components/inventory/InventoryButtons"

// Constants
import { MAIN_BACKGROUND_STYLES } from "@/lib/Constants"

/**
 * Page that stores the products in
 * the restaurant.
 *
 * @returns `Inventory` page
 */
export default function Inventory() {
  return (
    <div className="flex">
      <Sidebar />
      <main className={`${MAIN_BACKGROUND_STYLES}`}>
        <Header showDate={false} showSearchBar={true} />
        <CategoryBar />
        <InventoryButtons />
      </main>
    </div>
  )
}
