"use client";
import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import HamburgerIcon from "@/assets/Icons/HamburgerIcon";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header />

      <div className="  bg-gray-400 h-screen flex  gap-8 px-20 py-15">
        {" "}
        <div className="bg-yellow-50 flex items-start rounded-md px-2 relative">
          {/* Hamburger Button */}
          <button
            className="cursor-pointer z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            <HamburgerIcon />
          </button>

          {/* Sidebar with Slide-in Effect */}
          <div
            className={`absolute left-0 top-0 h-full bg-white shadow-md transition-transform duration-400 ${
              isOpen ? "translate-x-1" : "-translate-x-full"
            }`}
          >
            {isOpen ? <Sidebar /> : null}
          </div>
        </div>
        <div className="flex bg-red-400 h-full w-full rounded-md">
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
