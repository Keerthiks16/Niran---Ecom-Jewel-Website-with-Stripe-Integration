"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

type Product = {
  id: string;
  name: string;
  images: string[];
};

type Props = {
  products: Product[];
};

const Header = ({ products }: Props) => {
  const [randomProduct, setRandomProduct] = useState<Product | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (products.length > 0) {
      const randomIndex = Math.floor(Math.random() * products.length);
      setRandomProduct(products[randomIndex]);
    }

    // Trigger entrance animation
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, [products]);

  return (
    <header className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-2xl shadow-2xl">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 animate-gradient-xy"></div>

      {/* Floating Orbs */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gray-200/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-32 right-20 w-32 h-32 bg-gray-300/20 rounded-full blur-2xl animate-bounce delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gray-100/40 rounded-full blur-lg animate-pulse delay-500"></div>

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 backdrop-blur-[1px] bg-white/20"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center h-full">
        {/* Left Side - Enhanced Text Content */}
        <div
          className={`w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-center md:text-left transform transition-all duration-1000 ${
            isLoaded
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
        >
          {/* Decorative Line */}
          <div className="w-20 h-1 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full mb-6 mx-auto md:mx-0 animate-pulse"></div>

          <h1
            className={`${dancing.className} text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-gray-900 drop-shadow-lg leading-tight`}
          >
            <span className="inline-block animate-bounce">W</span>
            <span className="inline-block animate-bounce delay-75">e</span>
            <span className="inline-block animate-bounce delay-150">l</span>
            <span className="inline-block animate-bounce delay-225">c</span>
            <span className="inline-block animate-bounce delay-300">o</span>
            <span className="inline-block animate-bounce delay-375">m</span>
            <span className="inline-block animate-bounce delay-450">e</span>
            <span className="inline-block mx-4"></span>
            <span className="inline-block animate-bounce delay-525">T</span>
            <span className="inline-block animate-bounce delay-600">o</span>
            <br />
            <span className="bg-gradient-to-r from-gray-800 via-black to-gray-700 bg-clip-text text-transparent animate-pulse">
              Niran
            </span>
          </h1>

          <p className="text-gray-700 text-xl md:text-2xl mb-8 font-light leading-relaxed drop-shadow-sm">
            Discover extraordinary products and
            <span className="font-semibold text-gray-900">
              {" "}
              unbeatable deals{" "}
            </span>
            crafted just for you
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start">
            <Button
              asChild
              className="group relative px-8 py-4 text-lg font-semibold bg-gray-900 text-white hover:bg-gray-800 border-0 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-gray-500/25"
            >
              <Link href="/products" className="flex items-center gap-2">
                <span>Explore Products</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </Button>

            <Button
              variant="outline"
              className="px-8 py-4 text-lg font-semibold bg-white/80 backdrop-blur-md border-gray-300 text-gray-900 hover:bg-white hover:border-gray-400 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              View Collections
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-3 mt-8 justify-center md:justify-start">
            {["Premium Quality", "Fast Shipping", "Best Prices"].map(
              (feature, index) => (
                <span
                  key={feature}
                  className={`px-4 py-2 bg-white/60 backdrop-blur-md rounded-full text-sm text-gray-700 border border-gray-200 animate-fadeIn shadow-sm`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {feature}
                </span>
              )
            )}
          </div>
        </div>

        {/* Right Side - Enhanced Product Image */}
        {randomProduct?.images[0] && (
          <div
            className={`w-full md:w-1/2 h-[250px] md:h-full relative group transform transition-all duration-1000 delay-500 ${
              isLoaded
                ? "translate-x-0 opacity-100 scale-100"
                : "translate-x-full opacity-0 scale-75"
            }`}
          >
            {/* Image Container with Advanced Effects */}
            <div className="relative h-full overflow-hidden">
              {/* Animated Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 rounded-3xl p-1 animate-spin-slow">
                <div className="h-full bg-white rounded-3xl"></div>
              </div>

              {/* Main Image */}
              <div className="absolute inset-2 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={randomProduct.images[0]}
                  alt={randomProduct.name}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700 filter group-hover:brightness-110 group-hover:contrast-110"
                  priority
                />

                {/* Image Overlay Effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100/10 to-white/5 mix-blend-overlay"></div>
              </div>

              {/* Floating Product Badge */}
              <div className="absolute top-6 right-6 bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                Featured
              </div>

              {/* Product Name Label */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 border border-gray-200 shadow-lg transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-gray-900 font-semibold text-lg truncate">
                  {randomProduct.name}
                </h3>
                <p className="text-gray-600 text-sm">Trending Now</p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gray-800 rounded-full animate-ping"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gray-600 rounded-full animate-bounce delay-1000"></div>
          </div>
        )}
      </div>

      {/* Bottom Wave Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-100/30 to-transparent"></div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes gradient-xy {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-gradient-xy {
          background-size: 400% 400%;
          animation: gradient-xy 15s ease infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </header>
  );
};

export default Header;
