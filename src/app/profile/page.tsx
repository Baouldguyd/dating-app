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
      <div className=" grid h-full font-[inter-regular] grid-rows-[30%_25%_1fr] gap-4">
        <div className=" relative grid grid-rows-[70%_1fr]">
          {/* Cover Image */}
          <div className="relative ">
            <div className="absolute flex justify-between pt-4  w-full">
              <button className="px-4 py-2 absolute cursor-pointer left-10 rounded-md  bg-[#00000099] text-[#fff] text-[12px]">
                Back
              </button>
              <button className="px-4 py-2 bg-[#00000099] cursor-pointer rounded-md absolute right-10 text-[#fff] text-[12px]">
                Update Cover
              </button>
            </div>
            <Image
              src={userCoverImage}
              alt="Cover Image"
              className="w-full h-full"
            />
          </div>
          <div className=" absolute top-15 left-13 w-[40%] h-[65%] flex px-4 gap-2">
            <div className="h-full relative">
              <Image
                src={profileImage}
                alt="Profile Image"
                className=" w-full h-full"
              />
              <button className=" absolute right-[-16] bottom-[-15]">
                <UpdateProfileIcon />
              </button>
            </div>
            <div className="pt-6 flex gap-2 items-start">
              <span className="">
                <p className="font-bold text-lg">Temiloluwa, 27</p>
                <p className="text-[#00000099] text-[12px] font-bold">Lagos</p>
              </span>
              <button className=" cursor-pointer">
                <EditIcon />
              </button>
            </div>
          </div>

          <div className="bg-[#fff] flex justify-end ">
            <div className=" flex gap-2 p-4 ">
              <button className="bg-[#EF2424] cursor-pointer rounded-full text-[#fff] px-4 text-[10px] ">
                Edit Profile
              </button>
              <button className=" bg-[#EF2424] cursor-pointer rounded-full text-[#fff] px-4 text-[10px]">
                Edit Match Setup
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#fff]">
          <div className="md:w-[50%] w-full h-full flex flex-col gap-4">
            <div className="w-full  h-20 relative bg-green-200  pl-4 pt-4 rounded-md items-start border border-[#D9D9D9] flex ">
              {isEditing ? (
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="A few words about myself"
                  className="border-none pl-4 text-[#000000f6] text-sm"
                />
              ) : (
                <p className="border-none pl-4 text-[#00000059] text-sm">
                  A few words about myself
                </p>
              )}
              <button
                onClick={() => setIsEditing(!isEditing)}
                className=" absolute left-51 cursor-pointer"
              >
                <PenIcon />
              </button>
            </div>
            <div className="w-full  rounded-md border border-[#D9D9D9]  flex p-3 justify-around">
              <div className=" h-20 w-20 rounded-md flex gap-2">
                <Image
                  src={profileImage}
                  alt="Profile Image"
                  className=" w-full h-full"
                />
              </div>
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="h-20 w-20 p-2 cursor-pointer rounded-md flex gap-2 border border-[#D9D9D9] flex-col"
                >
                  <p className="text-[10px] text-center text-[#00000099]">
                    Add Photo
                  </p>
                  <span className="mx-auto">
                    <AddPhototIcon />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="">
          <ProfileGrid/>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
