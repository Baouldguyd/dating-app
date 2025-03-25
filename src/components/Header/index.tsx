import Image from "next/image";
import Logo from "@/assets/Logo/image.png";
import NotificationIcon from "@/assets/Icons/NotificationIcon";
import userImage from "@/assets/Images/profileImageIcon.png";
import SearchIcon from "@/assets/Icons/SearchIcon";
import FilterIcon from "@/assets/Icons/FilterIcon";
const Header = () => {
  return (
    <div className=" font-[inter-regular] ">
      {/* Navbar */}
      <header className="w-full md:px-6 md:shadow-lg border-b-2 border-[#ffffff85] flex justify-between md:grid md:grid-cols-[12rem_1fr_10rem]">
        {/* Logo */}
        <div className="md:py-4 md:px-8 px-2 flex  items-center justify-around gap-8 shadow-lg  ">
          <Image src={Logo} alt={"Logo"} className="h-full w-15" />
          <div>
            <p className=" font-[jani-purva-regular] text-lg md:text-2xl">
              Chuly
            </p>
          </div>
        </div>
        <div className=" md:flex items-center pl-30 gap-6 hidden ">
          <span className="relative flex ">
            <span className=" absolute left-6 bottom-3">
              <SearchIcon />
            </span>
            <input
              type="text"
              placeholder="Search"
              className="bg-[#E3EBF1]  border-[#3E7BEA] border-[1.5px] h-10 rounded-full pl-12"
            />
          </span>
          <span className="relative flex">
            <span className=" absolute left-3 bottom-3">
              <FilterIcon />
            </span>
            <input
              type="text"
              placeholder="Filter"
              className="border-[#000000] border-[1px] w-20  h-10 rounded-full pl-8 px-2"
            />
          </span>
        </div>
        <div className=" h-full flex justify-around my-auto items-center gap-6 px-6">
          <span>
            <NotificationIcon />
          </span>
          <Image src={userImage} alt={"User Image"} className=" h-15 w-15" />
        </div>
      </header>
    </div>
  );
};

export default Header;
