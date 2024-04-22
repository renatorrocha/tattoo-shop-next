import Image from "next/image";
import WhatsAppLogo from "/public/whatsapp-logo-white.svg";
import Link from "next/link";
import { WhatsAppLink } from "@/utils/constants";
import { MessageFormatter } from "@/utils/message-formatter";

export default function ContactsPage() {
  console.log(MessageFormatter("teste tes"));
  return (
    <section className="py-8 lg:pt-12 text-center items-center h-full flex-grow flex flex-col justify-center gap-48 -mt-24">
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
        className="items-center flex justify-center gap-8 border-b-2 py-4 w-[244px] border-b-muted rounded-lg bg-[#494949] hover:scale-90 animation-all"
      >
        <Image src={WhatsAppLogo} alt="WhatsApp logo" className="size-8" />
        <div className="flex flex-col items-start">
          <p className="font-inter font-medium text-lg">Enviar WhatsApp</p>
          <p className="font-inter text-xs text-muted">(+55 11) 99711 1111</p>
        </div>
      </Link>
    </section>
  );
}
