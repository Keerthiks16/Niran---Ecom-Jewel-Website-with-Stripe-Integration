import React from "react";
import { stripe } from "@/lib/stripe";
import Header from "@/components/Header";
import Carousel from "@/components/Carousel";

const HomePage = async () => {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 8,
  });

  return (
    <main className="px-4 py-6">
      <Header products={products.data} />
      <Carousel products={products.data} />
    </main>
  );
};

export default HomePage;
