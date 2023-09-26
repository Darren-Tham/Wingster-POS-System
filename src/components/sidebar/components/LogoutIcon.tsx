// SVG
import LogoutSVG from "@public/logout-icon.svg"

// Components
import ButtonIcon from "./components/button-icon/ButtonIcon"

/**
 * Logout Icon in `Sidebar`. Logs out
 * of the application.
 *
 * @returns `LogoutIcon` component
 */
export default function LogoutIcon() {
  return <ButtonIcon src={LogoutSVG} alt="Logout Icon" />
}
