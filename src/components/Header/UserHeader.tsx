import Image from "next/image";
import userImage from "@/assets/Images/travel-agent.png";
import ProgressBar from "./ProgressBar";

const UserHeader = () => {
  return (
    <div className="flex  h-full md:gap-25 font-[inter-regular] items-center">
      <div className="  flex gap-6">
        <Image
          src={userImage}
          alt="User Image"
          className="h-30 w-30 rounded-full mx-aut hidden md:block"
        />
        <div className=" my-auto flex-col">
        <p className=" font-bold md:text-lg text-sm ">Welcome Temiloluwa</p>
        <p className=" md:text-sm  text-[10px]">My profile Completeness</p>
        <ProgressBar progress={60} />
        </div>
             
      </div>
      <div className=" flex gap-2  items-center md:flex-row flex-col">
        <label htmlFor="relationshipType" className="font-bold hidden md:block">Relationship Type:</label>
        <select  name="relationshipType" id="relationshipType" className=" cursor-pointer shadow-2xl md:p-2 font-medium md:w-35 rounded-2xl md:px-4 text-[12px]">
            <option value="dating">Dating</option>
            <option value="married">Married</option>
            <option value="single">Single</option>
        </select>
      </div>
    </div>
  );
};

export default UserHeader;
