import ProductDetail from "@/components/ProductDetail";
import { stripe } from "@/lib/stripe";
import React from "react";

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const product = await stripe.products.retrieve(params.id, {
    expand: ["default_price"],
  });

  // Serialize product for client component
  return (
    <div>
      <ProductDetail product={JSON.parse(JSON.stringify(product))} />
    </div>
  );
};

export default ProductPage;
