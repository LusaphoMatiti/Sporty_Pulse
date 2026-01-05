import LoadingContainer from "@/components/global/LoadingContainer";
import SectionTitle from "@/components/global/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function ProductsPage() {
  return (
    <Suspense fallback={<LoadingContainer />}>
      <section className="pt-8 mt-10">
        <SectionTitle text="Training & Recovery Equipment" />

        <div className="pt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Core */}
          <article className="group relative">
            <Link href="/category/fitness/core">
              <Card className="overflow-hidden rounded-xl border transition hover:shadow-lg">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src="/core.jpg"
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

          {/* Upper Body */}
          <article className="group relative">
            <Link href="/category/fitness/upper-body">
              <Card className="overflow-hidden rounded-xl border transition hover:shadow-lg">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src="/upperbody.jpg"
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

          {/* Full Body */}
          <article className="group relative">
            <Link href="/category/fitness/full-body">
              <Card className="overflow-hidden rounded-xl border transition hover:shadow-lg">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src="/fullbody.jpg"
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

          {/* Lower Body */}
          <article className="group relative">
            <Link href="/category/fitness/lower-body">
              <Card className="overflow-hidden rounded-xl border transition hover:shadow-lg">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src="/lowerbody.jpg"
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
          <article className="group relative">
            <Link href="/category/recovery">
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
}
