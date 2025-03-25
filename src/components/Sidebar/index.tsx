import DashboardIcon from "@/assets/Icons/DashboardIcon";
import FavoritesIcon from "@/assets/Icons/FavoritesIcon";
import InterestedInMeIcon from "@/assets/Icons/InterestedInMeIcon";
import LogoutIcon from "@/assets/Icons/LogoutIcon";
import MutualsIcon from "@/assets/Icons/MutualsIcon";
import MySubscribedIcon from "@/assets/Icons/MySubscribedIcon";
import ProfileIcon from "@/assets/Icons/ProfileIcon";
import SettingsIcon from "@/assets/Icons/SettingsIcon";
import React from "react";
import userImage from "@/assets/Images/profileImageIcon.png";
import Image from "next/image";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: <DashboardIcon /> },
  { name: " My Profile", href: "/profile", icon: <ProfileIcon /> },
  { name: "Favorites", href: "/favorites", icon: <FavoritesIcon /> },
  { name: "My Mutuals", href: "/mutuals", icon: <MutualsIcon /> },
  { name: "My Subscribed", href: "/subscribed", icon: <MySubscribedIcon /> },
  { name: "interested", href: "/interested", icon: <InterestedInMeIcon /> },
  { name: "Settings", href: "/settings", icon: <SettingsIcon /> },
  { name: "Logout", href: "/logout", icon: <LogoutIcon /> },
];

const Sidebar = () => {
  return (
    <div className=" px-15 font-[inter-regular]">
      <div className="">{/* Profile Image & User Name*/}
        <Image src={userImage} alt={"User Image"} className=" h-15 w-15 m-auto" />
        <p>Temiloluwa</p>
      </div>
      {/* navigation */}
      <div className=" flex flex-col">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="flex items-center gap-4 py-2 hover:bg-gray-100 rounded-md"
          >
            {item.icon}
            <span className=" font-[inter-regular]">{item.name}</span>
          </a>
        ))}
      </div>

    </div>
  );
};

export default Sidebar;
