import Link from "next/link";
import React from "react";
import Stripe from "stripe";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";

interface Props {
  product: Stripe.Product;
}

const ProductCard = ({ product }: Props) => {
  const price = product.default_price as Stripe.Price;

  return (
    <Link href={`/products/${product.id}`} className="block">
      <Card className="hover:shadow-xl transition-shadow h-full flex flex-col overflow-hidden">
        {/* Product Image */}
        {product.images?.[0] && (
          <div className="relative h-[200px] w-full overflow-hidden">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Product Info */}
        <CardHeader className="text-lg font-semibold text-primary mt-2">
          {product.name}
        </CardHeader>

        <CardContent className="text-sm text-muted-foreground line-clamp-2 mb-2">
          {product.description || "No description available."}
        </CardContent>

        <CardContent className="mt-auto text-base font-medium text-black dark:text-white">
          {price?.unit_amount
            ? `₹${(price.unit_amount / 100).toFixed(2)}`
            : "Price not available"}
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
