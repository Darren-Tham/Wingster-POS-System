// SVG
import CashRegisterSVG from "@public/cash-register-icon.svg";

// Components
import ButtonIcon from "@/components/sidebar/ButtonIcon";

type Props = {
  iconStyles: string;
};

/**
 * Cash Register Icon in `Sidebar`. Opens
 * the Cash Register.
 *
 * @param Props `CashRegisterIcon` props
 * @returns `CashRegisterIcon` component
 */
export default function CashRegisterIcon({ iconStyles }: Props) {
  return (
    <ButtonIcon
      src={CashRegisterSVG}
      alt="Cash Register Icon"
      iconStyles={iconStyles}
    />
  );
}
