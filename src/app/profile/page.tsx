"use client";
import Layout from "@/components/Layout";
import Image from "next/image";
import userCoverImage from "@/assets/Images/userCoverImage.png";
import profileImage from "@/assets/Images/ProfilePicture.png";
import UpdateProfileIcon from "@/assets/Icons/UpdateProfileIcon";
import EditIcon from "@/assets/Icons/EditIcon";
import PenIcon from "@/assets/Icons/PenIcon";
import { useState } from "react";
import AddPhototIcon from "@/assets/Icons/AddPhotoIcon";
import ProfileGrid from "@/components/ProfileGrid/ProfileGrid";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <Layout>
      <div className=" h-full font-[inter-regular]  flex flex-col min-h-[100svh] gap-4">
        {/* Cover Section */}
        <div className="relative min-h-[30%] grid grid-rows-[70%_1fr]">
          {/* Cover Image */}
          <div className="relative">
            {/* Back and Update Cover buttons */}
            <div className="absolute flex justify-between pt-4 w-full px-4">
              <button className="px-2 py-1 md:px-4 md:py-2 rounded-md bg-[#00000099] text-[#fff] text-[10px] md:text-[12px]">
                Back
              </button>
              <button className="px-2 py-1 md:px-4 md:py-2 bg-[#00000099] rounded-md text-[#fff] text-[10px] md:text-[12px] hidden md:block">
                Update Cover
              </button>
            </div>
            <Image
              src={userCoverImage}
              alt="Cover Image"
              className="w-full h-full rounded-t-md object-cover"
            />
          </div>

          {/* Profile Info */}
          <div className="absolute md:top-15 md:left-13 left-2 top-2 w-[90%] md:w-[40%] h-[65%] flex gap-2">
            <div className="h-full relative">
              <Image
                src={profileImage}
                alt="Profile Image"
                className="rounded-md w-40 h-40 md:w-full md:h-full"
              />
              <button className="absolute -right-4 -bottom-12 md:right-[-16] md:bottom-[-15]">
                <UpdateProfileIcon />
              </button>
            </div>
            <div className="pt-2 md:pt-6 flex flex-col md:gap-2 md:ml-4 relative">
              <p className="font-bold text-sm md:text-lg">Temiloluwa, 27</p>
              <p className="text-[#00000099] text-[10px]  font-bold md:text-[0.9rem]">
                Lagos
              </p>
              <button className="cursor-pointer mt-1 absolute top-1 md:top-6 -right-10 md:-right-10">
                <EditIcon />
              </button>
            </div>
          </div>

          {/* Edit Buttons */}
          <div className="flex md:justify-end ">
            <div className="flex mt-4 md:mt-0  md:gap-2 justify-between   gap-1 p-5 w-full md:w-auto">
              <button className="bg-[#EF2424] cursor-pointer rounded-full text-[#fff] w-auto text-[10px] px-2 md:px-4 py-1">
                Edit Profile
              </button>
              <button className="bg-[#EF2424] cursor-pointer rounded-full text-[#fff] w-auto text-[10px] px-2 md:px-4 py-1">
                Edit Match Setup
              </button>
            </div>
          </div>
        </div>

        {/* About & Photos Section */}
        <div className=" h-auto">
          <div className="md:w-[50%] w-full h-full flex flex-col gap-4">
            {/* About me */}
            <div className="w-full h-20 relative  pl-4 pt-4 rounded-md border bg-[#fff] border-[#D9D9D9] flex">
              {isEditing ? (
                <input
                  type="text"
                  placeholder="A few words about myself"
                  className="border-none pl-4 text-[#000000f6] text-sm bg-transparent w-full"
                />
              ) : (
                <p className="border-none pl-4 text-[#00000059] text-sm">
                  A few words about myself
                </p>
              )}
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="absolute right-4 top-2 cursor-pointer"
              >
                <PenIcon />
              </button>
            </div>

            {/* Photo Upload Grid */}
            <div className="w-full rounded-md border bg-[#fff] border-[#D9D9D9] flex p-3 justify-around flex-wrap md:flex-nowrap gap-2">
              <div className="h-20 w-20 rounded-md flex gap-2">
                <Image
                  src={profileImage}
                  alt="Profile Image"
                  className="w-full h-full"
                />
              </div>
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="h-20 w-20 p-2 cursor-pointer rounded-md border border-[#D9D9D9] flex flex-col justify-center items-center"
                >
                  <p className="text-[10px] text-center text-[#00000099]">
                    Add Photo
                  </p>
                  <AddPhototIcon />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Profile Grid */}
        <div>
          <ProfileGrid />
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
