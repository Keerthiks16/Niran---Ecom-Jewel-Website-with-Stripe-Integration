"use client";

import React, { useState } from "react";
import Stripe from "stripe";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cartStore";

interface Props {
  product: Stripe.Product;
}

const ProductDetail = ({ product }: Props) => {
  const [quantity, setQuantity] = useState(1); // Default quantity is 1

  const price = product.default_price as Stripe.Price;
  const unitAmount = price?.unit_amount || 0;

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const { addItem } = useCartStore();

  const onAddItem = () => {
    if (quantity < 1) return; // Prevent 0 quantity
    addItem({
      id: product.id,
      name: product.name,
      price: unitAmount,
      quantity: quantity,
      imageURL: product.images?.[0] || null,
    });
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      {/* Left: Image */}
      {product.images?.[0] && (
        <div className="w-full md:w-1/2">
          <Image
            src={product.images[0]}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-md object-contain shadow-md w-full"
          />
        </div>
      )}

      {/* Right: Details */}
      <div className="w-full md:w-1/2 space-y-4">
        <h1 className="text-3xl font-bold text-primary">{product.name}</h1>

        <p className="text-muted-foreground text-base">
          {product.description || "No description available."}
        </p>

        {unitAmount && (
          <div className="text-xl font-semibold mt-4">
            Price: ₹{(unitAmount / 100).toFixed(2)}
          </div>
        )}

        {/* Quantity Selector */}
        <div className="flex items-center gap-4 mt-6">
          <span className="text-sm font-medium">Quantity:</span>
          <div className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 rounded px-3 py-1">
            <Button size="icon" variant="ghost" onClick={decrement}>
              –
            </Button>
            <span className="w-6 text-center">{quantity}</span>
            <Button size="icon" variant="ghost" onClick={increment}>
              +
            </Button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <div className="mt-6">
          <Button size="lg" className="w-full md:w-auto" onClick={onAddItem}>
            Add to Cart
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
