"use client";
import Image from "next/image";
import davinaProfileImage from "@/data/UserImages/Davina/davinaProfileImage.png";
import HeartIcon from "@/assets/Icons/HeartIcon";
import VerifiedIcon from "@/assets/Icons/VerifiedIcon";
import davinaCoverImage from "@/data/UserImages/Davina/davinaCoverImage.png";
import { useEffect, useState } from "react";
import "@/components/Loader/Loader.css";
import users from "@/data/users.json";
import HeartActiveIcon from "@/assets/Icons/HeartActiveIcon";

const UserCards = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [likedUsers, setLikedUsers] = useState<Record<number, boolean>>({}); // holds liked status by index or id

  const toggleLike = (index: number) => {
    setLikedUsers((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    setTimeout(async () => {
      setIsLoading(false);
      console.log(users);
    }, 500);
  }, []);
  return (
    <div className=" font-[inter-regular] h-full  scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 overflow-y-auto">
      {/* User Card */}
      {isLoading ? (
        <div className="h-[20rem] flex items-center justify-center">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="flex flex-wrap gap-4 ">
          {users.map((user, index) => (
            <div
              key={index}
              className="w-[212px] h-[211px] mb-4 border border-[#D9D9D9] md:h-[18rem] md:w-[19rem]  relative grid grid-rows-[40%_1fr] bg-white rounded-md shadow-lg"
            >
              {/* Cover Image */}
              <div className="rounded-t-md">
                <Image
                  src={davinaCoverImage}
                  alt="davinaCoverImage"
                  className="rounded-t-md md:w-full"
                />
              </div>
              <div className="rounded-b-md py-2 px-4 flex flex-col justify-between">
                <div className="flex justify-between font-semibold mt-[6px] text-[10px] md:text-[0.75rem]">
                  <span>
                    <span className="flex ">
                      <p>{user.name} ,</p>
                      <p>{user.age}</p>
                    </span>
                    <p>{user.location}</p>
                  </span>
                  <span className="text-right">
                    <p>{user.match} Match</p>
                    {user.verified && (
                      <span className="flex items-center md:gap-1">
                        <VerifiedIcon /> Verified Address
                      </span>
                    )}
                  </span>
                </div>
                <div>
                  <p className="text-[#00000099] w-[90%] text-[8px] md:text-[0.8rem] ">
                    {user.bio}
                  </p>
                </div>
                <div className="flex justify-between">
                  <button className="cursor-pointer p-2 text-white text-[8px] bg-[#EF2424] rounded-full md:text-[0.6rem]">
                    More Info
                  </button>
                  <button
                    onClick={() => toggleLike(index)}
                    className="cursor-pointer"
                  >
                    {likedUsers[index] ? <HeartActiveIcon /> : <HeartIcon />}
                  </button>
                </div>
              </div>
              {/* Profile Image */}
              <div className="absolute top-13 left-18 md:top-20 md:left-28 rounded-full h-[4rem] w-[4rem] md:h-[5rem] md:w-[5rem]">
                <Image
                  src={davinaProfileImage}
                  alt="davinaProfileImage"
                  className="rounded- h-full w-full"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserCards;
