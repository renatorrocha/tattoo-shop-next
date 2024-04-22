import Image from "next/image";
import Link from "next/link";
import { WhatsAppLink } from "@/utils/constants";
import WhatsAppLogo from "/public/whatsapp-logo-white.svg";
import ContactImg from "/public/contact-img.png";

export default function ContactsPage() {
  return (
    <section className="flex flex-col lg:flex-row py-8 lg:pt-12 h-full w-full justify-center items-center">
      <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:gap-12 gap-6 lg:flex-grow">
        <div className="space-y-4">
          <h1 className="font-inter text-2xl font-black">
            Entre em <span className="text-brand-color">Contato</span>
          </h1>
          <p className="font-light font-inter text-typography">
            Clique no botão abaixo e envie uma mensagem. Vamos conversar!
          </p>
        </div>

        <Link
          target="_blank"
          href={WhatsAppLink}
          className="flex justify-center items-center gap-8 border-b-2 py-4 w-[244px] border-b-muted rounded-lg bg-[#494949] hover:scale-90 transition-all"
        >
          <Image
            src={WhatsAppLogo}
            alt="WhatsApp logo"
            width={24}
            height={24}
          />
          <div className="flex flex-col items-start">
            <p className="font-inter font-medium text-lg">Enviar WhatsApp</p>
            <p className="font-inter text-xs text-muted">(+55 11) 99711 1111</p>
          </div>
        </Link>
      </div>

      <div className="lg:w-1/2 flex justify-center">
        <Image
          src={ContactImg}
          alt="Contact"
          className="object-cover hidden lg:inline"
        />
      </div>
    </section>
  );
}
