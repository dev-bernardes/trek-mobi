// app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import About from "@/components/About";
import Websites from "@/components/Websites";
import Apps from "@/components/Apps";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Highlights />
      <About />
      <Websites />
      <Apps />
    </>
  );
}
