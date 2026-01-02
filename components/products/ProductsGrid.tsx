"use client";

import { formatCurrency } from "@/utils/format";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import FavoriteToggleButtonClient from "./FavoriteToggleButtonClient";

type ProductWithFavorite = {
  id: string;
  name: string;
  image: string;
  price: number;
  favoriteId: string | null;
};

type ProductsGridProps = {
  products: ProductWithFavorite[];
  userId: string | null;
};

const ProductsGrid = ({ products, userId }: ProductsGridProps) => {
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { name, price, image, id, favoriteId } = product;
        const RandAmount = formatCurrency(price);

        return (
          <article key={id} className="group relative">
            <Link href={`/products/${id}`}>
              <Card className="group overflow-hidden rounded-xl border transition hover:shadow-lg">
                <CardContent className="p-4">
                  <div className="relative aspect-[4/5] w-full  dark:bg-gray-800 rounded-lg overflow-hidden ">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 30vw"
                      className=" object-contain 
          p-4
          transition-transform 
          duration-300 
          group-hover:scale-105"
                    />
                  </div>
                  {/* Use Client Toggle Button */}
                  <div className="mt-4 text-center">
                    <h2 className="text-sm font-medium capitalize line-clamp-1">
                      {name}
                    </h2>
                    <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-gray-100">
                      {RandAmount}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <div
              className="absolute top-7 right-7 z-5 "
              onClick={(e) => e.stopPropagation()}
            >
              <FavoriteToggleButtonClient
                userId={userId}
                favoriteId={favoriteId}
                productId={id}
              />
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
