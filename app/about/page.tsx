import { AboutItems } from "@/utils/constants";
import Image from "next/image";
import BodyImg from "/public/body-img.png";

export default function AboutPage() {
  return (
    <section className="flex justify-between h-full flex-grow lg:gap-12 py-8 lg:pt-12">
      <div className="space-y-8">
        <h1 className="text-start font-black text-2xl">
          Prazer, sou <span className="text-brand-color">Sandro Luz</span>
        </h1>

        <div className="flex flex-col gap-4 text-start">
          {AboutItems.map((item, index) => (
            <p className="font-light font-inter" key={index}>
              {item.text}
            </p>
          ))}
        </div>

        <p className="text-4xl font-island text-center">Sandro Luz</p>
      </div>

      {/* TODO: adjust image */}
      <Image
        src={BodyImg}
        alt="image of Sandro Luz"
        className="h-full hidden lg:inline "
      />
    </section>
  );
}
