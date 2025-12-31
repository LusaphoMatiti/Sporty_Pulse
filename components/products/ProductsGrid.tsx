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
              <Card className="transform group-hover:shadow-xl transition-shadow duration-500 dark:border-gray-200">
                <CardContent className="p-4">
                  <div className="relative h-64 md:h-48 rounded overflow-hidden ">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 30vw"
                      className="rounded w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  {/* Use Client Toggle Button */}
                  <div className="mt-4 text-center">
                    <h2 className="text-lg font-semibold capitalize text-center transition-colors duration-200">
                      {name}
                    </h2>
                    <p className=" mt-2 font-medium text-sm">{RandAmount}</p>
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
