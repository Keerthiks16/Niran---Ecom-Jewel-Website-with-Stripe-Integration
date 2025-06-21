"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "../assets/logo.png";

type Props = {};

export default function Navbar({}: Props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        w-full flex items-center justify-between px-6 py-4 
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500 ease-in-out
        ${
          isScrolled
            ? "bg-white/95 dark:bg-gray-950/95 backdrop-blur-md shadow-lg border-b border-gray-200/20 dark:border-gray-800/20"
            : "bg-white dark:bg-gray-950 shadow-md"
        }
      `}
    >
      {/* Logo */}
      <div className="group cursor-pointer">
        <div className="transform transition-all duration-300 group-hover:scale-105 group-hover:rotate-1">
          <Image
            src={logo}
            width={150}
            height={150}
            alt="logo"
            className="transition-all duration-300 group-hover:brightness-110"
          />
        </div>
      </div>

      {/* Links */}
      <div className="flex gap-2 bg-gray-50/50 dark:bg-gray-900/50 rounded-full p-2 backdrop-blur-sm">
        {[
          { href: "/", label: "Home" },
          { href: "/products", label: "Products" },
          { href: "/cart", label: "Cart" },
        ].map((link) => (
          <Link key={link.href} href={link.href}>
            <Button
              variant="ghost"
              className={`
                relative text-base px-6 py-2 rounded-full
                transition-all duration-300 ease-out
                hover:bg-primary/10 hover:text-primary hover:scale-105
                active:scale-95
                ${
                  activeLink === link.href
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-gray-700 dark:text-gray-300"
                }
                before:absolute before:inset-0 before:rounded-full
                before:bg-gradient-to-r before:from-primary/20 before:to-transparent
                before:opacity-0 before:transition-opacity before:duration-300
                hover:before:opacity-100
                overflow-hidden
              `}
              onClick={() => setActiveLink(link.href)}
            >
              <span className="relative z-10 font-medium">{link.label}</span>

              {/* Animated underline */}
              <span
                className={`
                  absolute bottom-1 left-1/2 h-0.5 bg-primary
                  transition-all duration-300 ease-out
                  ${
                    activeLink === link.href
                      ? "w-3/4 -translate-x-1/2"
                      : "w-0 -translate-x-1/2"
                  }
                `}
              />
            </Button>
          </Link>
        ))}
      </div>

      {/* Right section with animated elements */}
      <div className="flex items-center gap-4">
        {/* Animated cart icon placeholder */}
        <div className="relative group cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg">
            <div className="w-5 h-5 bg-primary/60 rounded-sm animate-pulse group-hover:animate-none transition-all duration-300" />
          </div>

          {/* Notification dot */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
        </div>

        {/* User profile placeholder */}
        <div className="group cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
            <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full transition-all duration-300 group-hover:rotate-180" />
          </div>
        </div>

        {/* Animated menu button for mobile */}
        <div className="md:hidden group cursor-pointer">
          <div className="flex flex-col gap-1 transition-all duration-300 group-hover:gap-1.5">
            <div className="w-6 h-0.5 bg-gray-600 dark:bg-gray-400 transition-all duration-300 group-hover:bg-primary" />
            <div className="w-4 h-0.5 bg-gray-600 dark:bg-gray-400 transition-all duration-300 group-hover:bg-primary group-hover:w-6" />
            <div className="w-5 h-0.5 bg-gray-600 dark:bg-gray-400 transition-all duration-300 group-hover:bg-primary group-hover:w-6" />
          </div>
        </div>
      </div>

      {/* Animated border */}
      <div
        className={`
          absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary via-purple-500 to-primary
          transition-all duration-1000 ease-out
          ${isScrolled ? "w-full opacity-100" : "w-0 opacity-0"}
        `}
      />
    </nav>
  );
}
