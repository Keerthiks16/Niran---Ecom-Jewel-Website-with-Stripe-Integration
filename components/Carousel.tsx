"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Stripe from "stripe";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

interface Props {
  products: Stripe.Product[];
}

const Carousel = ({ products }: Props) => {
  const [current, setCurrent] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [products.length]);

  const handleNext = () => {
    setIsAnimating(true);
    setDirection("next");
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % products.length);
      setIsAnimating(false);
    }, 300);
  };

  const handlePrev = () => {
    setIsAnimating(true);
    setDirection("prev");
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + products.length) % products.length);
      setIsAnimating(false);
    }, 300);
  };

  const goToSlide = (index: number) => {
    if (index !== current) {
      setIsAnimating(true);
      setDirection(index > current ? "next" : "prev");
      setTimeout(() => {
        setCurrent(index);
        setIsAnimating(false);
      }, 300);
    }
  };

  const currentProduct = products[current];
  const price = currentProduct?.default_price as Stripe.Price;

  if (!products.length) return null;

  return (
    <div className="w-full max-w-6xl mx-auto mt-12 px-4">
      {/* Main Carousel Container */}
      <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl border-2 border-gray-100">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 animate-gradient-shift"></div>

        {/* Floating Orbs */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-black/5 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-20 right-16 w-12 h-12 bg-black/8 rounded-full blur-lg animate-float-delayed"></div>
        <div className="absolute bottom-16 left-1/4 w-20 h-20 bg-black/3 rounded-full blur-2xl animate-pulse"></div>

        <Card className="relative bg-transparent border-0 shadow-none">
          <CardContent className="p-0">
            <div className="flex flex-col lg:flex-row min-h-[500px]">
              {/* Product Image Section */}
              <div className="w-full lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
                {/* Navigation Arrows */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/20 backdrop-blur-md hover:bg-black/30 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg border border-white/20"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/20 backdrop-blur-md hover:bg-black/30 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg border border-white/20"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                {/* Image Container */}
                <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center p-8">
                  {currentProduct.images?.[0] && (
                    <div
                      className={`relative transition-all duration-700 transform ${
                        isAnimating
                          ? direction === "next"
                            ? "-translate-x-full opacity-0 scale-75"
                            : "translate-x-full opacity-0 scale-75"
                          : "translate-x-0 opacity-100 scale-100"
                      }`}
                    >
                      {/* Glowing Border Effect */}
                      <div className="absolute -inset-4 bg-gradient-to-r from-white/30 via-gray-300/30 to-white/30 rounded-3xl blur-lg animate-pulse"></div>

                      {/* Image Wrapper */}
                      <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-2xl">
                        <Image
                          src={currentProduct.images[0]}
                          alt={currentProduct.name}
                          width={350}
                          height={350}
                          className="rounded-xl object-contain transition-transform duration-500 hover:scale-105"
                          priority
                        />

                        {/* Reflection Effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-xl pointer-events-none"></div>
                      </div>

                      {/* Floating Elements */}
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-white rounded-full animate-ping"></div>
                      <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gray-300 rounded-full animate-bounce delay-1000"></div>
                    </div>
                  )}
                </div>
              </div>

              {/* Product Details Section */}
              <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-white">
                <div
                  className={`transition-all duration-700 transform ${
                    isAnimating
                      ? direction === "next"
                        ? "translate-x-full opacity-0"
                        : "-translate-x-full opacity-0"
                      : "translate-x-0 opacity-100"
                  }`}
                >
                  {/* Product Category Badge */}
                  <div className="inline-block bg-black text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
                    Featured Product
                  </div>

                  {/* Product Name */}
                  <CardTitle className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                    <span className="bg-gradient-to-r from-black via-gray-800 to-gray-900 bg-clip-text text-transparent">
                      {currentProduct.name}
                    </span>
                  </CardTitle>

                  {/* Price */}
                  {price?.unit_amount && (
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-black">
                          ₹{(price.unit_amount / 100).toFixed(2)}
                        </span>
                        <span className="text-gray-500 text-lg line-through">
                          ₹{((price.unit_amount / 100) * 1.2).toFixed(2)}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        Free shipping included
                      </div>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-md">
                    {currentProduct.description ||
                      "Experience premium quality with this exceptional product designed for those who appreciate excellence."}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <button className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg">
                      Add to Cart
                    </button>
                    <button className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg border-2 border-black hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 shadow-md">
                      Learn More
                    </button>
                  </div>

                  {/* Feature Pills */}
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Premium Quality",
                      "Fast Delivery",
                      "Money Back Guarantee",
                    ].map((feature, index) => (
                      <span
                        key={feature}
                        className={`px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-800 border border-gray-200 animate-fadeInUp hover:bg-gray-200 transition-colors duration-200`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Dot Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current
                  ? "bg-black scale-125 shadow-lg"
                  : "bg-black/30 hover:bg-black/50"
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
          <div
            className="h-full bg-gradient-to-r from-black to-gray-700 transition-all duration-300 ease-out"
            style={{ width: `${((current + 1) / products.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Product Counter */}
      <div className="text-center mt-6">
        <span className="text-gray-600 text-sm font-medium">
          {current + 1} of {products.length} products
        </span>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-180deg);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 15s ease infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Carousel;
