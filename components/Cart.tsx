"use client";

import React from "react";
import { useCartStore } from "@/store/cartStore";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { loadStripe } from "@stripe/stripe-js";
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: "400",
});

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const Cart = () => {
  const { items, updateItemQuantity } = useCartStore();

  const totalAmount = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleIncrement = (id: string, currentQty: number) => {
    updateItemQuantity(id, currentQty + 1);
  };

  const handleDecrement = (id: string, currentQty: number) => {
    updateItemQuantity(id, currentQty - 1); // removes item if qty is 0
  };

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items }),
    });

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url;
    } else {
      console.error("Checkout Error:", data.error);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2
        className={`${dancing.className} text-3xl md:text-5xl mt-2 text-primary font-semibold mb-2 ml-5`}
      >
        Cart
      </h2>
      {items.length === 0 ? (
        <p className="text-muted-foreground">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-6">
            {items.map((item) => (
              <Card
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-start gap-4 p-4"
              >
                {item.imageURL && (
                  <Image
                    src={item.imageURL}
                    alt={item.name}
                    width={120}
                    height={120}
                    className="object-contain rounded-md"
                  />
                )}

                <CardContent className="p-0 flex-1 space-y-2">
                  <h3 className="text-lg font-semibold">{item.name}</h3>

                  <p className="text-sm text-muted-foreground">
                    Unit Price: ₹{(item.price / 100).toFixed(2)}
                  </p>

                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-sm font-medium">Quantity:</span>
                    <div className="flex items-center border rounded px-2 py-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDecrement(item.id, item.quantity)}
                      >
                        –
                      </Button>
                      <span className="px-3">{item.quantity}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleIncrement(item.id, item.quantity)}
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  <p className="text-sm font-medium pt-1">
                    Total: ₹{((item.price * item.quantity) / 100).toFixed(2)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Checkout Section */}
          <div className="mt-10 text-right">
            <h4 className="text-xl font-semibold mb-4">
              Grand Total: ₹{(totalAmount / 100).toFixed(2)}
            </h4>
            <Button size="lg" onClick={handleCheckout}>
              Proceed to Checkout
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
