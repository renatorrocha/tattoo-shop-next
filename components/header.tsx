import { NavItems } from "@/utils/constants";
import NavLinkItem from "./nav-link-item";
import Link from "next/link";
import { paths } from "@/utils/paths";
import Image from "next/image";
import WhatsAppLogo from "/public/whatsapp-logo.svg";

export default function Header() {
  return (
    <header className="flex pt-12 px-12 lg:px-24 lg:pt-16 flex-col lg:flex-row lg:items-center lg:justify-between gap-4 ">
      <Link
        href={paths.Home()}
        className="font-londrina text-[32px] leading-[26px] animation-all hover:scale-110"
      >
        Sandro <span className="text-brand-color">Luz</span> <br /> Tattoo
        <br />
        Shop
      </Link>

      <div className="space-y-1">
        <div className="flex gap-4">
          {NavItems.map((item) => (
            <NavLinkItem key={item.label} label={item.label} href={item.href} />
          ))}
        </div>

        <div className="hidden lg:flex justify-end text-right">
          <Image src={WhatsAppLogo} alt="WhatsApp logo" />
          <p className="text-xs text-muted ">(+55 11) 99711 1111</p>
        </div>
      </div>
    </header>
  );
}
