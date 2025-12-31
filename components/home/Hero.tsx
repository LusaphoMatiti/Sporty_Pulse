import { Button } from "@heroui/button";
import HeroCarousel from "./HeroCarousel";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
          Too busy for the gym?
        </h1>
        <h2 className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          Sporty Pulse helps you stay active and recover at home. Turn any
          corner of your space into a personal fitness zone without sacrificing
          time or convience.
        </h2>
        <Button
          size="lg"
          className="mt-10 rounded-lg  text-primary-foreground bg-red-600 hover:bg-red-500 dark:bg-red-700 font-bold dark:text-white dark:hover:bg-red-500 transition ease-in"
        >
          <Link href="/products">Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
};
export default Hero;
