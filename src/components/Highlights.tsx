import Image from "next/image";

const items = [
  "50+ Managed Websites",
  "Apps in Multiple Categories",
  "Content in 100+ Countries",
  "Millions of Monthly Users",
];

export default function Highlights() {
  return (
    <section className="bg-white pt-16 pb-10">
      <div className="mx-auto max-w-[1280px] rounded-[24px] md:rounded-[100px] bg-black px-6 py-6 md:px-[52px] md:h-[112px]">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-4 text-center text-white font-semibold text-[14px] md:text-[18px] leading-snug md:flex md:items-center md:justify-center md:gap-8">
          {items.map((t, i) => (
            <li key={t} className="flex items-center justify-center gap-3 md:gap-8">
              <span className="whitespace-pre-line">{t}</span>
              {i < items.length - 1 && (
                <span className="hidden md:inline-block">
                  <Image src="/rectangle.svg" alt="" width={12} height={12} />
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
