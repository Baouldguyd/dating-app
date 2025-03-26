import Image from "next/image";
import userImage from "@/assets/Images/travel-agent.png";
import ProgressBar from "./ProgressBar";

const UserHeader = () => {
  return (
    <div className="flex  h-full gap-25 font-[inter-regular] items-center">
      <div className="  flex gap-6">
        <Image
          src={userImage}
          alt="User Image"
          className="h-30 w-30 rounded-full mx-auto"
        />
        <div className=" my-auto flex-col">
        <p className=" font-bold text-lg">Welcome Temiloluwa</p>
        <p className=" text-sm">My profile Completeness</p>
        <ProgressBar progress={60} />
        </div>
             
      </div>
      <div className=" flex gap-2 items-center">
        <label htmlFor="relationshipType font-bold">Relationship Type:</label>
        <select  name="relationshipType" id="relationshipType" className=" cursor-pointer shadow-2xl p-2 font-medium w-35 rounded-2xl px-4">
            <option value="dating">Dating</option>
            <option value="married">Married</option>
            <option value="single">Single</option>
        </select>
      </div>
    </div>
  );
};

export default UserHeader;
