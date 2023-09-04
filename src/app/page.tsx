// Components
import Header from "@/components/home/Header"
import Sidebar from "@/components/sidebar/Sidebar"
import Grid from "@/components/home/Grid"

// Constants
import { MAIN_BACKGROUND_STYLES } from "@/lib/Constants"

// Enums
import { SelectedIcons } from "@/lib/Enums"

/**
 * Home page of the application.
 *
 * @returns `Home` page
 */
export default function Home() {
  return (
    <div className="flex">
      <Sidebar currentIcon={SelectedIcons.House} />
      <main className={`${MAIN_BACKGROUND_STYLES} gap-10`}>
        <Header />
        <Grid />
      </main>
    </div>
  )
}
