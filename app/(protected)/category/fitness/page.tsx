import LoadingContainer from "@/components/global/LoadingContainer";
import SectionTitle from "@/components/global/SectionTitle";
import WorkOut from "@/components/home/WorkOut";
import MarketingLayout from "@/components/layouts/MarketingLayout";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function Fitness() {
  return (
    <MarketingLayout>
      <Suspense fallback={<LoadingContainer />}>
        <section className="pt-8 mt-0">
          <SectionTitle text="Targeted Training" />

          <div className="pt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Core */}
            <article className="group relative">
              <Link href="/category/fitness/core">
                <Card className="overflow-hidden rounded-xl border transition hover:shadow-lg">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src="/core.jpg"
                        alt=""
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/45" />
                      <div className="relative z-10 h-full flex items-center justify-center">
                        <h2 className="text-4xl font-bold text-white">Core</h2>
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
                        alt=""
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/45" />
                      <div className="relative z-10 h-full flex items-center justify-center">
                        <h2 className="text-4xl font-bold text-white">
                          Upper Body
                        </h2>
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
                        alt=""
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/45" />
                      <div className="relative z-10 h-full flex items-center justify-center">
                        <h2 className="text-4xl font-bold text-white">
                          Full Body
                        </h2>
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
                        alt=""
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/45" />
                      <div className="relative z-10 h-full flex items-center justify-center">
                        <h2 className="text-4xl font-bold text-white">
                          Lower Body
                        </h2>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </article>
          </div>
        </section>
      </Suspense>
    </MarketingLayout>
  );
}
