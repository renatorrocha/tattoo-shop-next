import { ServicesItems } from "@/utils/constants";

export default function ServicesPage() {
  return (
    <section className="py-8 lg:pt-12">
      <h1 className="font-black text-brand-color text-2xl font-inter text-center lg:text-start lg:text-3xl">
        Serviços
      </h1>

      <div className="flex py-4 flex-col gap-8 lg:mt-12 lg:gap-14 lg:flex-row">
        {ServicesItems.map((item) => (
          <article
            key={item.title}
            className="flex flex-col text-center lg:text-start gap-4 border-transparent hover:border-brand-color border-2 rounded-lg p-4 animation-all"
          >
            <h2 className="font-black font-inter">{item.title}</h2>

            <p className="font-extralight text-muted font-inter text-sm">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
