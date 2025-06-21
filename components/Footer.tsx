"use client";
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  ArrowUp,
  Heart,
  Star,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white/8 rounded-full blur-2xl animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-white/3 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-10 right-10 w-16 h-16 bg-white/10 rounded-full blur-xl animate-bounce"></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-90"></div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                  YourBrand
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Crafting exceptional experiences with premium quality
                  products. We believe in excellence, innovation, and customer
                  satisfaction.
                </p>
              </div>

              {/* Social Media */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Follow Us</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: Facebook, href: "#", label: "Facebook" },
                    { icon: Twitter, href: "#", label: "Twitter" },
                    { icon: Instagram, href: "#", label: "Instagram" },
                    { icon: Mail, href: "#", label: "Email" },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      className="group bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                      aria-label={label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white relative">
                Quick Links
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-white to-gray-400 rounded-full"></div>
              </h4>
              <ul className="space-y-3">
                {[
                  "Home",
                  "Products",
                  "About Us",
                  "Services",
                  "Blog",
                  "Contact",
                  "FAQ",
                  "Support",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block group"
                    >
                      <span className="group-hover:border-b border-white transition-all duration-300">
                        {link}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Service */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white relative">
                Customer Service
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-white to-gray-400 rounded-full"></div>
              </h4>
              <ul className="space-y-3">
                {[
                  "Track Your Order",
                  "Return Policy",
                  "Shipping Info",
                  "Size Guide",
                  "Privacy Policy",
                  "Terms of Service",
                  "Warranty",
                  "Gift Cards",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block group"
                    >
                      <span className="group-hover:border-b border-white transition-all duration-300">
                        {link}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info & Newsletter */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white relative">
                Get In Touch
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-white to-gray-400 rounded-full"></div>
              </h4>

              {/* Contact Details */}
              <div className="space-y-4">
                {[
                  {
                    icon: Phone,
                    text: "+1 (555) 123-4567",
                    href: "tel:+15551234567",
                  },
                  {
                    icon: Mail,
                    text: "hello@yourbrand.com",
                    href: "mailto:hello@yourbrand.com",
                  },
                  {
                    icon: MapPin,
                    text: "123 Business Ave, Suite 100, City, State 12345",
                    href: "#",
                  },
                ].map(({ icon: Icon, text, href }) => (
                  <a
                    key={text}
                    href={href}
                    className="flex items-start space-x-3 text-gray-300 hover:text-white transition-colors duration-300 group"
                  >
                    <Icon className="w-5 h-5 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm leading-relaxed">{text}</span>
                  </a>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="space-y-4">
                <h5 className="text-white font-medium">Stay Updated</h5>
                <div className="flex flex-col space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white focus:bg-white/20 transition-all duration-300"
                    />
                  </div>
                  <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-white/10 bg-white/5 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              {[
                { icon: Star, text: "Premium Quality" },
                { icon: Heart, text: "Customer Love" },
                { text: "🚚 Free Shipping" },
                { text: "🔒 Secure Checkout" },
                { text: "↩️ Easy Returns" },
              ].map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-gray-300 animate-fadeInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {badge.icon && <badge.icon className="w-4 h-4" />}
                  <span className="text-sm font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © {new Date().getFullYear()} YourBrand. All rights reserved.
                Made with ❤️
              </div>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Privacy
                  </a>
                  <span>•</span>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Terms
                  </a>
                  <span>•</span>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Cookies
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-white text-black p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50 group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
        </button>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
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
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
