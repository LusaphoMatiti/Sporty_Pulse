"use client";

import { useEffect, useState } from "react";
import { formatCurrency } from "@/utils/format";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import FavoriteToggleButtonClient from "./FavoriteToggleButtonClient";
import { Button } from "../ui/button";

function useIsLargeScreen() {
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");

    const update = () => setIsLarge(media.matches);
    update();

    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return isLarge;
}

type ProductItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  favoriteId?: string | null;
};

type ProductsGridProps = {
  products: ProductItem[];
  userId: string | null;
  favoriteMap?: Record<string, string | null>;
};

const ProductsGrid = ({ products, userId }: ProductsGridProps) => {
  const [page, setPage] = useState(0);
  const isLargeScreen = useIsLargeScreen();

  const ITEMS_PER_PAGE = isLargeScreen ? 3 : 1;

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  useEffect(() => {
    setPage(0);
  }, [products.length]);

  return (
    <div className="pt-12 space-y-8">
      {/* CONTROLS — OUTSIDE GRID */}
      {totalPages > 1 && (
        <div className="flex justify-between items-center  gap-6">
          <Button
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
            disabled={page === 0}
            variant="outline"
          >
            ← Prev
          </Button>

          <Button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
            disabled={page === totalPages - 1}
            variant="outline"
          >
            Next →
          </Button>
        </div>
      )}

      {/* SLIDER VIEWPORT */}
      <div className="overflow-hidden">
        {/* SLIDER TRACK */}
        <div
          className="grid grid-flow-col auto-cols-[100%] transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${page * 100}%)`,
          }}
        >
          {/* SLIDES */}
          {Array.from({ length: totalPages }).map((_, slideIndex) => {
            const slideProducts = products.slice(
              slideIndex * ITEMS_PER_PAGE,
              slideIndex * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
            );

            return (
              <div
                key={slideIndex}
                className=" grid
    gap-6
    grid-cols-1
    place-items-center
    lg:grid-cols-3
    lg:place-items-start
"
              >
                {slideProducts.map((product) => {
                  const { id, name, price, image, favoriteId } = product;
                  const formattedPrice = formatCurrency(price);

                  return (
                    <article
                      key={id}
                      className="group relative w-full max-w-[360px] "
                    >
                      <Link href={`/equipments/${id}`}>
                        <Card className=" overflow-hidden rounded-xl border transition hover:shadow-lg">
                          {" "}
                          <CardContent className="p-4">
                            {" "}
                            <div className="relative aspect-[4/3] w-full dark:bg-gray-800 rounded-lg overflow-hidden">
                              {" "}
                              <Image
                                src={image}
                                alt={name}
                                fill
                                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                                className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                              />{" "}
                            </div>{" "}
                            <div className="mt-4 text-center">
                              {" "}
                              <h2 className="text-sm font-medium capitalize line-clamp-1">
                                {" "}
                                {name}{" "}
                              </h2>{" "}
                              <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-gray-100">
                                {" "}
                                {formattedPrice}{" "}
                              </p>{" "}
                            </div>{" "}
                          </CardContent>{" "}
                        </Card>
                      </Link>

                      {userId && (
                        <div
                          className="absolute top-6 right-6 z-10"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FavoriteToggleButtonClient
                            userId={userId}
                            favoriteId={favoriteId ?? null}
                            productId={id}
                          />
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductsGrid;
