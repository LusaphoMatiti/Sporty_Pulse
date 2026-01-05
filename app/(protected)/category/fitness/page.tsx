import LoadingContainer from "@/components/global/LoadingContainer";
import SectionTitle from "@/components/global/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function Fitness() {
  return (
    <Suspense fallback={<LoadingContainer />}>
      <section className="pt-8 mt-20">
        <SectionTitle text="Shop By Body Part" />

        <div className="pt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Upper Body */}
          <article className="group relative">
            <Link href="/category/fitness/upper-body">
              <Card className="overflow-hidden rounded-xl border transition hover:shadow-lg">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src="/Fitness.jpg"
                      alt="Upper Body"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/45" />
                    <div className="relative z-10 h-full flex items-center justify-center">
                      <p className="text-4xl font-bold text-white">
                        Upper Body
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </article>

          {/* Lower Body */}
          <article className="group relative">
            <Link href="/category/fitness/lower-body">
              <Card className="overflow-hidden rounded-xl border transition hover:shadow-lg">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src="/Fitness.jpg"
                      alt="Lower Body"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/45" />
                    <div className="relative z-10 h-full flex items-center justify-center">
                      <p className="text-4xl font-bold text-white">
                        Lower Body
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </article>

          {/* Full Body */}
          <article className="group relative">
            <Link href="/category/fitness/full-body">
              <Card className="overflow-hidden rounded-xl border transition hover:shadow-lg">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src="/Fitness.jpg"
                      alt="Full Body"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/45" />
                    <div className="relative z-10 h-full flex items-center justify-center">
                      <p className="text-4xl font-bold text-white">Full Body</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </article>

          {/* Core */}
          <article className="group relative">
            <Link href="/category/fitness/core">
              <Card className="overflow-hidden rounded-xl border transition hover:shadow-lg">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src="/Fitness.jpg"
                      alt="Core"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/45" />
                    <div className="relative z-10 h-full flex items-center justify-center">
                      <p className="text-4xl font-bold text-white">Core</p>
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
}
