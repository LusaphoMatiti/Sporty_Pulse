import LoadingContainer from "@/components/global/LoadingContainer";
import SectionTitle from "@/components/global/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

const ShopByCategory = () => {
  return (
    <Suspense fallback={<LoadingContainer />}>
      <section className=" sm:pt-2 mt-2">
        <div className="px-10 pt-5">
          <SectionTitle text="Training Categories" />
        </div>

        <div className="pt-5 px-2 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3">
          {/* Fitness */}
          <article className="group relative">
            <Link href="/category/fitness">
              <Card className="group rounded-none overflow-hidden border transition hover:shadow-lg ">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src="/Fitness.jpg"
                      alt="Fitness"
                      fill
                      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 30vw"
                      className="
                          object-cover
                          transition-transform
                          duration-300
                          group-hover:scale-105
                        "
                    />
                    <div className="absolute inset-0 bg-black/45" />

                    {/* Content */}

                    <div className="relative z-10 h-full w-full flex flex-col justify-center items-center text-center px-4 sm:px-8">
                      <p className="max-w-2xl text-2xl  lg:text-5xl font-bold  sm:text-4xl text-white">
                        Fitness
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </article>

          {/* Recovery */}
          <article className="group relative">
            <Link href="/category/recovery">
              <Card className="overflow-hidden rounded-none border transition hover:shadow-xl">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src="/Recovery.jpg"
                      alt="Recovery"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 30vw"
                      className="
                          object-cover
                          transition-transform
                          duration-300
                          group-hover:scale-105
                        "
                    />
                    <div className="absolute inset-0 bg-black/30" />

                    {/* Content */}

                    <div className="relative z-10 h-full w-full flex items-center justify-center text-center px-4 sm:px-8">
                      <p className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white">
                        Recovery
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </article>
        </div>
      </section>
    </Suspense>
  );
};

export default ShopByCategory;
