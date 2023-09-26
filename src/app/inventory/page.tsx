// Components
import Header from "@/components/inventory/Header"
import Sidebar from "@/components/sidebar/Sidebar"
import CategoryBar from "@/components/category-bar/CategoryBar"
import InventoryButtons from "@/components/inventory/buttons/InventoryButtons"

// Constants
import { MAIN_BACKGROUND_STYLES } from "@/lib/Constants"
import AddCategoryPopup from "@/components/inventory/buttons/components/add/components/AddCategoryPopup"

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
      <main className={`${MAIN_BACKGROUND_STYLES} justify-between`}>
        <div className="flex flex-col gap-10">
          <Header />
          <CategoryBar />
        </div>
        <InventoryButtons />
      </main>
    </div>
  )
}
