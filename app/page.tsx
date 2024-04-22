import Image from "next/image";
import BodyImg from "/public/body-img.png";

export default function Home() {
  return (
    <section className="flex-grow flex flex-col justify-center w-full relative">
      <div className="text-start uppercase font-black font-inter text-[44px] lg:text-[80px]">
        <p className=" text-muted">inspire-se</p>
        <p className=" text-muted">expresse-se</p>
        <p className=" text-brand-color">tatue-se</p>
      </div>

      <p className="font-londrina text-[400px] text-[#212121] uppercase absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 hidden lg:inline">
        tattoo
      </p>

      <div className="absolute top-0 left-0 w-full h-full -z-10 lg:hidden">
        <Image
          src={BodyImg}
          alt="image of Sandro Luz"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );
}
