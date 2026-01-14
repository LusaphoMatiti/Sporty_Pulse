import { Button } from "@heroui/button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <main className="relative w-full min-h-[70vh] lg:min-h-[60vh] overflow-hidden flex text-center justify-center">
      <Image
        src="/sportsman.jpg"
        alt="Training"
        className="absolute inset-0
        w-full
        h-full
        object-cover
        object-[50%_80%]
        lg:object-[50%_60%]
        sm:object-[50%_100%]
        "
        fill
        placeholder="blur"
        blurDataURL="/blur.png"
        priority
      />

      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}

      <div className="relative z-10 w-full max-w-3xl px-6 sm:px-10 lg:px-16 flex flex-col justify-center items-center text-center">
        <h1 className="max-w-2xl font-bold text-3xl sm:text-4xl lg:text-5xl  text-white">
          Too busy for the gym?
        </h1>
        <p className="mt-6 max-w-xl text-sm sm:text-base text-white ">
          Sporty Pulse helps you stay active and recover at home. Turn any
          corner of your space into a personal fitness zone without sacrificing
          time or convience.
        </p>
        <Button
          size="lg"
          className="border border-white p-5 text-sm text-white w-30 mt-10 rounded-lg backdrop-blur-sm hover:bg-white/20 ease-in transition"
          aria-label="Open shop"
        >
          <Link href="/products">Shop Now</Link>
        </Button>
      </div>
    </main>
  );
};
export default Hero;
