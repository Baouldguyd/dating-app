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

const Sidebar = () => {
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
    <div className="px-5 py-10 font-[inter-regular]">
      {/* Profile Section */}
      <div className="flex flex-col gap-4 items-center">
        <Image
          src={userImage}
          alt="User Image"
          className="h-15 w-15 rounded-full"
        />
        <p className="text-center font-bold">Temiloluwa</p>
      </div>

      {/* Navigation */}
      <div className="mt-6 flex flex-col gap-2">
        {navItems.map((item, index) => {
          const isActive = currentPath === item.href;
          return (
            <a
              key={index}
              href={item.href}
              className={`flex items-center gap-4 py-2 px-6 rounded-md transition ${
                isActive ? "bg-red-500 text-white" : "hover:bg-gray-100"
              }`}
            >
              {item.icon}
              <span className="text-sm">{item.name}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
