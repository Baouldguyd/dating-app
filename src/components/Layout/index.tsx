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
      <div className="bg-[#F6F6F6] gap-6 h-screen flex md:px-6 md:py-8">
        <div className="relative flex">
          <button
            className="cursor-pointer absolute md:top-4 md:left-4 top-2 left-2 z-[2000] md:p-2 "
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <HamburgerIcon />
          </button>
          <div >
            <Sidebar isExpanded={isExpanded} />
          </div>
        </div>
        <div className="flex  h-full w-full rounded-r-md overflow-auto">
          <main className="w-full md:p-4">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
