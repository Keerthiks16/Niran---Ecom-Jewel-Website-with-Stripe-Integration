"use client";
import React, { useState } from "react";
import Stripe from "stripe";
import ProductCard from "./ProductCard";

interface Props {
  products: Stripe.Product[];
}

const ProductList = ({ products }: Props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredProduct = products.filter((product) => {
    const term = searchTerm.toLowerCase();
    const nameMatch = product.name.toLowerCase().includes(term);
    const descriptionMatch = product.description
      ? product.description.toLowerCase().includes(term)
      : false;

    return nameMatch || descriptionMatch;
  });
  return (
    <section className="px-4 py-6 max-w-7xl mx-auto">
      {/* Search bar */}
      <div className="mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e)=> setSearchTerm(e.target.value)}
          placeholder="Search Products"
          className="w-full md:w-1/2 p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary text-base"
        />
      </div>

      {/* Product grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProduct.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductList;
