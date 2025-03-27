"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import DashboardIcon from "@/assets/Icons/DashboardIcon";
import FavoritesIcon from "@/assets/Icons/FavoritesIcon";
import InterestedInMeIcon from "@/assets/Icons/InterestedInMeIcon";
import LogoutIcon from "@/assets/Icons/LogoutIcon";
import MutualsIcon from "@/assets/Icons/MutualsIcon";
import MySubscribedIcon from "@/assets/Icons/MySubscribedIcon";
import ProfileIcon from "@/assets/Icons/ProfileIcon";
import SettingsIcon from "@/assets/Icons/SettingsIcon";
import userImage from "@/assets/Images/profileImageIcon.png";

interface SidebarProps {
  isExpanded: boolean;
}

const Sidebar = ({ isExpanded }: SidebarProps) => {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: <DashboardIcon /> },
    { name: "My Profile", href: "/profile", icon: <ProfileIcon /> },
    { name: "Favorites", href: "/favorites", icon: <FavoritesIcon /> },
    { name: "My Mutuals", href: "/mutuals", icon: <MutualsIcon /> },
    { name: "My Subscribed", href: "/subscribed", icon: <MySubscribedIcon /> },
    { name: "Interested", href: "/interested", icon: <InterestedInMeIcon /> },
    { name: "Settings", href: "/settings", icon: <SettingsIcon /> },
    { name: "Logout", href: "/logout", icon: <LogoutIcon /> },
  ];

  return (
    <div
      className={`h-full  rounded-l-md font-[inter-regular]  transition-all duration-300 ease-in-out ${
        isExpanded ? "w-64 bg-[#fff] p-8" : "md:w-18 w-8"
      }`}
    >
      {/* Profile Section */}
      <div>
        <div className="flex flex-col items-center py-6">
          {isExpanded && (
            <div className=" ">
              <Image
                src={userImage}
                alt="User Image"
                className="h-16 w-16 rounded-full mx-auto"
              />
              <p className="mt-2 font-bold text-center">Temiloluwa</p>
            </div>
          )}
        </div>

        {/* Navigation */}
        {isExpanded && (
          <nav className="mt-4  ">
            {navItems.map((item, index) => {
              const isActive = currentPath === item.href;
              return (
                <a
                  key={index}
                  href={item.href}
                  className={`flex items-center gap-4 py-3 px-6 rounded-md transition-all duration-300 ${
                    isActive ? "bg-[#EF2424] text-white " : "hover:bg-gray-100"
                  }`}
                >
                  {item.icon}
                  {isExpanded && <span className="text-sm">{item.name}</span>}
                </a>
              );
            })}
          </nav>
        )}
        {
          !isExpanded &&(
            <nav className="mt-4 md:hidden flex flex-col gap-6">
            {navItems.map((item, index) => {
              const isActive = currentPath === item.href;
              return (
                <a
                  key={index}
                  href={item.href}
                  className={`flex m-auto  rounded-sm transition-all duration-300 ${
                    isActive ? "bg-[#EF2424] text-white " : "hover:bg-gray-100"
                  }`}
                >
                  {item.icon}
                </a>
              );
            })}
          </nav>
          )
        }
      </div>
    </div>
  );
};

export default Sidebar;
