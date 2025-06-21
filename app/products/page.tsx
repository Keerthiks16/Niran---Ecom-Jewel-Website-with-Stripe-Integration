import ProductList from "@/components/ProductList";
import { stripe } from "@/lib/stripe";
import React from "react";
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: "400",
});

type Props = {};

const page = async (props: Props) => {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
  });
  return (
    <>
      <h2
        className={`${dancing.className} text-3xl md:text-5xl mt-26 text-primary font-semibold mb-2 ml-5`}
      >
        All Products
      </h2>

      <ProductList products={products.data} />
    </>
  );
};

export default page;
