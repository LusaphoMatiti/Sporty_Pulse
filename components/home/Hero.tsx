import { Button } from "@heroui/button";
import HeroCarousel from "./HeroCarousel";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
          We changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          voluptatem ut nulla tenetur sunt laudantium blanditiis natus excepturi
          at laborum, maiores possimus temporibus earum rerum itaque! Dolores
          asperiores fugiat accusamus?
        </p>
        <Button
          size="lg"
          className="mt-10 bg-blue-500 text-white hover:bg-blue-400 rounded-lg"
        >
          <Link href="/products">Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
};
export default Hero;
