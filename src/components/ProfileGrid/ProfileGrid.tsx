import AgeIcon from "@/assets/Icons/AboutMe/AgeIcon";
import GenderIcon from "@/assets/Icons/AboutMe/GenderIcon";
import HeightIcon from "@/assets/Icons/AboutMe/HeightIcon";
import LocationIcon from "@/assets/Icons/AboutMe/LocationIcon";
import Nationalityicon from "@/assets/Icons/AboutMe/Nationalityicon";
import OccupationIcon from "@/assets/Icons/AboutMe/OccupationIcon";
import RelationshipIcon from "@/assets/Icons/AboutMe/RelationshipIcon";
import ReligionIcon from "@/assets/Icons/AboutMe/ReligionIcon";
import WeightIcon from "@/assets/Icons/AboutMe/WeightIcon";
import EditIcon from "@/assets/Icons/EditIcon";
import BikingIcon from "@/assets/Icons/Hobbies/BikingIcon";
import CookingIcon from "@/assets/Icons/Hobbies/CookingIcon";
import DancingIcon from "@/assets/Icons/Hobbies/DancingIcon";
import MuseumIcon from "@/assets/Icons/Hobbies/MuseumIcon";
import UmbrellaIcon from "@/assets/Icons/Hobbies/UmbrellaIcon";
import DrawingIcon from "@/assets/Icons/Interest/DrawingIcon";
import HistoryIcon from "@/assets/Icons/Interest/HistoryIcon";
import KnittingIcon from "@/assets/Icons/Interest/KnittingIcon";
import PhotographyIcon from "@/assets/Icons/Interest/PhotographyIcon";
import PoetryIcon from "@/assets/Icons/Interest/PoetryIcon";
import TravelIcon from "@/assets/Icons/Interest/TravelIcon";
import WoodworkingIcon from "@/assets/Icons/Interest/WoodworkingIcon";

const ProfileGrid = () => {
  const hobbies = [
    {
      hobby: "Laying on the Beach",
      icon: <UmbrellaIcon />,
      bg: "#FFFFFF",
    },
    {
      hobby: "Biking",
      icon: <BikingIcon />,
      bg: "#BC1B1B",
    },
    {
      hobby: "Cooking",
      icon: <CookingIcon />,
      bg: "#F6E123",
    },
    {
      hobby: "Dancing",
      icon: <DancingIcon />,
      bg: "#9747FF",
    },
    {
      hobby: "Museums & Arts",
      icon: <MuseumIcon />,
      bg: "#2DE9F5",
    },
  ];

  const interests = [
    {
      hobby: "Travel",
      icon: <TravelIcon />,
      bg: "#1B34BC",
    },
    {
      hobby: "Drawing",
      icon: <DrawingIcon />,
      bg: "#F62FD6",
    },
    {
      hobby: "History",
      icon: <HistoryIcon />,
      bg: "#EF2424",
    },
    {
      hobby: "Woodworking",
      icon: <WoodworkingIcon />,
      bg: "#13E234",
    },
    {
      hobby: "Photography",
      icon: <PhotographyIcon />,
      bg: "#F6E123",
    },
    {
      hobby: "Poetry",
      icon: <PoetryIcon />,
      bg: "#0C827B",
    },
    {
      hobby: "Knitting",
      icon: <KnittingIcon />,
      bg: "#2E275C",
    },
  ];

  const aboutMeData = [
    { icon: <GenderIcon />, label: "Gender", value: "Male", bg: "#EF2424" },
    { icon: <AgeIcon/>, label: "Age", value: "27", bg: "#3E7BEA" },
    { icon: <OccupationIcon/>, label: "Occupation", value: "Engineer", bg: "#F6E123" },
    { icon: <RelationshipIcon/>, label: "Relationship", value: "Single", bg: "#00A389" },
    { icon: <LocationIcon/>, label: "Location", value: "Lagos", bg: "#9747FF" },
    { icon: <HeightIcon/>, label: "Height range", value: "5’5 - 6’0", bg: "#0B6A59" },
    { icon: <WeightIcon/>, label: "Weight range", value: "60 - 70kg", bg: "#D40C0C" },
    { icon: <ReligionIcon/>, label: "Religion", value: "Christianity", bg: "#16166C" },
    { icon: <Nationalityicon/>, label: "Nationality", value: "Nigerian", bg: "#CEBB0F" },
  ];

  return (
    <div className="flex flex-col md:flex-row font-[inter-regular] gap-6 w-full flex-wrap md:flex-nowrap h-full">
      <div className="flex-1   h-full flex-col gap-2 p-3 border rounded-md border-[#D9D9D9] ">
        <div className=" flex  justify-between">
          <p className=" font-bold text-lg">My Hobbies</p>
          <button className=" cursor-pointer">
            <EditIcon />
          </button>
        </div>
        <div className="flex flex-wrap gap-8">
          {hobbies.map((hobby, index) => (
            <div className=" w-20 bg-[#fff] ">
              <div
                key={index}
                className={`flex items-center justify-center w-14 h-14 rounded-full m-auto  text-white`}
                style={{ backgroundColor: hobby.bg }}
              >
                {hobby.icon}
              </div>
              <p className=" text-center text-[15px]">{hobby.hobby}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex-col gap-2 flex h-full p-3 border rounded-md border-[#D9D9D9] ">
        <div className=" flex  justify-between">
          <p className=" font-bold text-lg">My Interests</p>
          <button className=" cursor-pointer">
            <EditIcon />
          </button>
        </div>
        <div className="flex flex-wrap gap-6 rounded-md">
          {interests.map((hobby, index) => (
            <div className=" w-20 bg-[#fff] ">
              <div
                key={index}
                className={`flex items-center justify-center w-14 h-14 rounded-full m-auto  text-white`}
                style={{ backgroundColor: hobby.bg }}
              >
                {hobby.icon}
              </div>
              <p className=" text-center text-[15px]">{hobby.hobby}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 h-full border border-[#D9D9D9] p-3 rounded-md">
        <h2 className="text-lg font-semibold mb-2">About Me</h2>
        <div className="flex flex-col gap-3">
          {aboutMeData.map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className=" w-8 h-8 rounded-full flex items-center justify-center" style={{
                backgroundColor: item.bg
              }}>{item.icon}</span>
              <p className="text-[#000000] text-sm w-full">
                <span className="flex gap-2 items-baseline">
                  <span className="font-medium min-w-[100px]">
                    {item.label}:
                  </span>
                  <span className="font-bold text-[15px] text-[#000000]">
                    {item.value}
                  </span>
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileGrid;
