"use client";

import { formatCurrency } from "@/utils/format";
import { Card, CardBody } from "@heroui/card";
import Link from "next/link";
import Image from "next/image";
import FavoriteToggleButton from "./FavoriteToggleButton";

type FeaturedProduct = {
  id: string;
  name: string;
  image: string;
  price: number;
};

const ProductsGrid = ({ products }: { products: FeaturedProduct[] }) => {
  return (
    <div className="pt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { name, price, image, id } = product;
        const RandAmount = formatCurrency(price);

        return (
          <article
            key={id}
            className="group relative transition-transform duration-300 hover:-translate-y-1"
          >
            <Card className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white">
              <Link
                href={`/products/${id}`}
                className="relative block h-64 md:h-56"
              >
                <Image
                  src={image}
                  alt={name}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 30vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Favorite button inside */}
                <div
                  className="absolute top-3 right-3 z-10 bg-amber-50 rounded-lg p-1"
                  onClick={(e) => e.stopPropagation()} // prevent link navigation
                >
                  <FavoriteToggleButton productId={id} />
                </div>
              </Link>

              <CardBody className="p-5 flex flex-col items-center">
                <h2 className="text-lg font-semibold text-gray-800 capitalize text-center group-hover:text-gray-900 transition-colors duration-200">
                  {name}
                </h2>
                <p className="text-gray-600 mt-2 font-medium text-sm">
                  {RandAmount}
                </p>
              </CardBody>
            </Card>
          </article>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
