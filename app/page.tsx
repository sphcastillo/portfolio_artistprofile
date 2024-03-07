import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Social } from "@/typings";
import Image from "next/image";

type Props = {
  socials: Social[];
};



export default function Home() {
  return (
    <div className="bg-[#400000] text-[#ddd4c6] h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Header />
      <section id='hero' className="snap-center">
        <Hero />
      </section>
      

    </div>
  );
}
