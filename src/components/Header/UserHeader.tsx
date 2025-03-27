import Image from "next/image";
import userImage from "@/assets/Images/travel-agent.png";
import ProgressBar from "./ProgressBar";

const UserHeader = () => {
  return (
    <div className="flex flex-col md:flex-row h-full md:gap-6 gap-4 relative font-[inter-regular] items-center w-full">
  <div className="flex gap-4 md:gap-6 items-center w-full md:w-auto">
    <div className=" hidden md:block">
    <Image
      src={userImage}
      alt="User Image"
      className="h-16  w-16 md:h-28 md:w-28 rounded-full mx-auto"
    />
    </div>
    <div className="flex flex-col justify-center  w-full px-4 gap-1 py-2 md:w-auto">
      <p className="font-bold md:text-lg text-sm  md:text-left">Welcome Temiloluwa</p>
      <p className="md:text-sm text-[10px]  md:text-left my-auto md:my-0">My profile Completeness</p>
      <ProgressBar progress={60} />
    </div>
  </div>

  <div className="flex gap-2 items-center md:flex-row flex-col w-full md:w-auto md:justify-start  ">
    <label htmlFor="relationshipType" className="font-bold hidden md:block">Relationship Type:</label>
    <select
      name="relationshipType"
      id="relationshipType"
      className="cursor-pointer shadow-2xl font-medium rounded-2xl md:text-sm text-[12px] absolute md:static top-3 right-5 md:top-0 md:right-0 border-6 px-2 bg-[#fff] border-[#fff] md:w-36 "
    >
      <option value="dating">Dating</option>
      <option value="married">Married</option>
      <option value="single">Single</option>
    </select>
  </div>
</div>

  );
};

export default UserHeader;
