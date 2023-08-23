"use client";

// Components
import WingsterLogo from "@/components/sidebar/icons/WingsterLogo";
import HouseIcon from "@/components/sidebar/icons/HouseIcon";
import OrderIcon from "@/components/sidebar/icons/OrderIcon";
import TenderIcon from "@/components/sidebar/icons/TenderIcon";
import CashRegisterIcon from "@/components/sidebar/icons/CashRegisterIcon";
import LanguageIcon from "@/components/sidebar/icons/LanguageIcon";
import LogoutIcon from "@/components/sidebar/icons/LogoutIcon";

// Enums
import { Icons } from "@/lib/Enums";

type Props = {
  currentIcon?: Icons;
};

/**
 * Sidebar that links to different pages
 * and events of the application.
 */
export default function Sidebar({ currentIcon }: Props) {
  const iconStyles =
    "w-full aspect-square flex justify-center items-center mx-8 hover:bg-neutral-100 relative";
  return (
    <aside className="flex flex-col justify-between items-center w-max h-screen">
      <div className="flex flex-col items-center">
        <WingsterLogo />
        <HouseIcon
          isSelected={Icons.House === currentIcon}
          iconStyles={iconStyles}
        />
        <OrderIcon
          isSelected={Icons.Order === currentIcon}
          iconStyles={iconStyles}
        />
        <TenderIcon
          isSelected={Icons.Order === currentIcon}
          iconStyles={iconStyles}
        />
        <CashRegisterIcon iconStyles={iconStyles} />
        <LanguageIcon iconStyles={iconStyles} />
      </div>
      <LogoutIcon iconStyles={iconStyles} />
    </aside>
  );
}
