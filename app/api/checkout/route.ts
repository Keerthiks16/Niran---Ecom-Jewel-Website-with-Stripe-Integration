// /app/api/checkout/route.ts
import { stripe } from "@/lib/stripe"; // Make sure you have stripe instance setup here
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: body.items.map((item: any) => ({
        price_data: {
          currency: "inr",
          product_data: {
            name: item.name,
            images: item.imageURL ? [item.imageURL] : [],
          },
          unit_amount: item.price,
        },
        quantity: item.quantity,
      })),
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cart`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
