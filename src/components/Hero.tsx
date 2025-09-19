"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-white text-black">
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-20 text-center">
        <Image
          src="/banner-hero.svg"
          alt="Globe illustration"
          width={472}
          height={325}
          priority
          className="mx-auto h-auto w-[472px] max-w-full"
        />

        <h1 className="mt-8 font-[700] text-[48px] leading-tight">
          Connecting the World Through<br />Content and Technology
        </h1>

        <p className="mt-4 text-[18px] font-normal text-black/70 max-w-3xl mx-auto">
          We create websites and apps that inspire, inform, <br />
          and entertain millions of people in over 100 countries.
        </p>

        <div className="mt-8 flex justify-center gap-4">
            <Button className="h-11 rounded-full px-6 bg-[#08FE08] text-black hover:bg-[#08FE08]/90 text-[18px] font-semibold">
            Learn More
            </Button>
            <Button variant="outline" className="h-11 rounded-full px-6 border-black/20 text-black hover:bg-black/5 text-[14px] font-semibold">
            Explore Our Apps
            </Button>
        </div>
      </div>
    </section>
  );
}
