// SVG
import CashRegisterSVG from "@public/cash-register-icon.svg"

// Components
import ButtonIcon from "../ButtonIcon"

/**
 * Cash Register Icon in `Sidebar`. Opens
 * the Cash Register.
 *
 * @returns `CashRegisterIcon` component
 */
export default function CashRegisterIcon() {
  return <ButtonIcon src={CashRegisterSVG} alt="Cash Register Icon" />
}
