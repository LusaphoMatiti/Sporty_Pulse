import Container from "@/components/global/Container";
import LoadingContainer from "@/components/global/LoadingContainer";
import SectionTitle from "@/components/global/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

const ShopByCategory = () => {
  return (
    <Suspense fallback={<LoadingContainer />}>
      <section className="pt-8 mt-20">
        <SectionTitle text="Shop By Category" />

        <div className="pt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Fitness */}
          <article className="group relative">
            <Link href="">
              <Card className="group overflow-hidden rounded-xl border transition hover:shadow-lg">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3]  w-full overflow-hidden">
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

                    <div className="relative z-10 h-full max-w-7xl mx-auto p-20 flex flex-col justify-center items-center text-center">
                      <p className="max-w-2xl lg:text-5xl font-bold   sm:text-4xl text-white">
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
            <Link href="">
              <Card className="overflow-hidden rounded-2xl border transition hover:shadow-xl">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src="/Recovery.jpg"
                      alt="Recovery"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="
                          object-cover
                          transition-transform
                          duration-300
                          group-hover:scale-105
                        "
                    />
                    <div className="absolute inset-0 bg-black/30" />

                    {/* Content */}

                    <div className="relative z-10 h-full max-w-7xl mx-auto p-20 flex flex-col justify-center items-center text-center">
                      <p className="max-w-2xl lg:text-5xl font-bold   sm:text-4xl text-white">
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
