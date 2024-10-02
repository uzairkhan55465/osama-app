"use client";
import { useState } from "react";
import { FiSearch, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import Logo from "../../../public/home/logo.jpeg";
import Image from "next/image";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center bg-gradient-to-r from-[#F86591] to-[#F86591]   px-6 sm:px-16 pb-3 w-full ">
      <div className="flex items-center pt-3">
        {/* Logo */}
        <h1 className="text-white text-3xl font-bold"><span className="text-white">Mahrosh</span><span className="">Candles</span> </h1>
      </div>

      {/* Search and Cart */}
      <div className="flex items-start pt-5 space-x-4">
        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-white font-bold hover:text-white">
            Home
          </a>
          <a href="#" className="text-white font-bold hover:text-white">
            Shop Now
          </a>
          <a href="#" className="text-white font-bold hover:text-white">
            Products
          </a>
          <a href="#" className="text-white font-bold hover:text-white">
            Contact us
          </a>
        </nav>

        {/* Search Icon */}
        <FiSearch className="text-white w-6 h-6 cursor-pointer hover:text-white " />

        {/* Cart with Badge */}
        <div className="relative">
          <FiShoppingCart className="text-white w-6 h-6 cursor-pointer hover:text-white" />
          <span className="absolute -top-2 -right-2 bg-[#F3A5A5] text-white text-xs rounded-full px-1">
            3
          </span>
        </div>
      </div>
    </header>
  );
}
