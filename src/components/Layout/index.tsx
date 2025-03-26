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
      <div className="bg-[#fff] gap-6 h-screen flex px-6 py-8">
        <div className="relative flex">
          <button
            className="cursor-pointer absolute top-4 left-4 z-50 p-2 "
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <HamburgerIcon />
          </button>
          <div className="z-20">
            <Sidebar isExpanded={isExpanded} />
          </div>
        </div>
        <div className="flex  h-full w-full rounded-r-md overflow-auto">
          <main className="w-full p-4">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
