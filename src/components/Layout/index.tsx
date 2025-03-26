"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import HamburgerIcon from "@/assets/Icons/HamburgerIcon";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header />

      <div className="bg-gray-400 h-screen flex gap-8 px-20 py-15">
        {/* Sidebar Container */}
        <div className="relative">
          {/* Hamburger Button */}
          <button
            className="cursor-pointer absolute z-10 p-2 rounded-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            <HamburgerIcon />
          </button>

          {/* Sidebar with Slide-in Effect */}
          <div
            className={`absolute left-0 top-0 h-full bg-white shadow-md transition-all duration-500 ease-in-out transform ${
              isOpen ? "translate-x-0 " : "-translate-x-full"
            }`}
          >
            <Sidebar />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex bg-red-400 h-full w-full rounded-md overflow-auto">
          <main className="w-full p-4">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
