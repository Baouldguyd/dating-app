"use client";
import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import HamburgerIcon from "@/assets/Icons/HamburgerIcon";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col h-screen">
    <Header />
    <div className="bg-[#F6F6F6] gap-6 flex-1 flex md:px-6 md:py-8 overflow-hidden">
      {/* Sidebar + Hamburger */}
      <div className="relative flex-shrink-0">
        <button
          className="cursor-pointer absolute md:top-4 md:left-4 top-2 left-2 z-[2000] md:p-2"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <HamburgerIcon />
        </button>
        <Sidebar isExpanded={isExpanded} />
      </div>
  
      {/* Scrollable MAIN */}
      <div className="flex flex-col h-full w-full rounded-r-md overflow-hidden">
        <main className="flex-1 overflow-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  </div>
  
  );
};

export default Layout;
