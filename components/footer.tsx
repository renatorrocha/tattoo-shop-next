import Image from "next/image";
import WhatsAppLogo from "/public/whatsapp-logo.svg";
import DotYellow from "/public/dot-yellow.svg";

export default function Footer() {
  return (
    <footer className="flex justify-between lg:justify-normal lg:gap-4 bg-footer py-4">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-4">
        <p className="text-xs text-muted font-inter">Sandro Luz Tattoo Shop</p>

        <Image className="hidden lg:inline" src={DotYellow} alt="Yellow dot" />

        <p className="text-xs text-muted font-inter">
          Rua Limoeiro, 1000 - Catalão - SP
        </p>
      </div>

      <Image src={DotYellow} alt="Yellow dot" />

      <div className="flex items-center gap-1">
        <Image src={WhatsAppLogo} alt="WhatsApp logo" />

        <p className="text-xs text-muted font-inter">(+55 11) 99711 1111</p>
      </div>
    </footer>
  );
}
