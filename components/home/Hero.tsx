import { Button } from "@heroui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[70vh] lg:min-h-[60vh] overflow-hidden flex text-center justify-center">
      <img
        src="./sportsman.jpg"
        alt="Training"
        className="absolute inset-0
        w-full
        h-full
        object-cover
        object-[50%_80%]
        lg:object-[50%_60%]
        sm:object-[50%_100%]
        "
      />

      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}

      <div className="relative z-10 h-full max-w-7xl mx-auto p-20 flex flex-col justify-center items-center text-center">
        <h1 className="max-w-2xl lg:text-5xl font-bold   sm:text-4xl text-white">
          Too busy for the gym?
        </h1>
        <p className="mt-8 max-w-xl text-m text-white">
          Sporty Pulse helps you stay active and recover at home. Turn any
          corner of your space into a personal fitness zone without sacrificing
          time or convience.
        </p>
        <Button
          size="lg"
          className="border border-white p-5 text-sm text-white w-30 mt-10 rounded-lg backdrop-blur-sm hover:bg-white/20 ease-in transition"
        >
          <Link href="/products">Shop Now</Link>
        </Button>
      </div>
    </section>
  );
};
export default Hero;
