import EditIcon from "@/assets/Icons/EditIcon";

const ProfileGrid = () => {
  const hobbies = [
    {
      hobby: "Laying on the Beach",
      icon: "",
      bg: "#FFFFFF",
    },
    {
      hobby: "Biking",
      icon: "",
      bg: "#BC1B1B",
    },
    {
      hobby: "Cooking",
      icon: "",
      bg: "#F6E123",
    },
    {
      hobby: "Dancing",
      icon: "",
      bg: "#9747FF",
    },
    {
      hobby: "Museums & Arts",
      icon: "",
      bg: "#2DE9F5",
    },
  ];

  const interests = [
    {
      hobby: "Travel",
      icon: "",
      bg: "#1B34BC",
    },
    {
      hobby: "Drawing",
      icon: "",
      bg: "#F62FD6",
    },
    {
      hobby: "History",
      icon: "",
      bg: "#EF2424",
    },
    {
      hobby: "Woodworking",
      icon: "",
      bg: "#13E234",
    },
    {
      hobby: "Photography",
      icon: "",
      bg: "#F6E123",
    },
    {
      hobby: "Poetry",
      icon: "",
      bg: "#0C827B",
    },
    {
      hobby: "Knitting",
      icon: "",
      bg: "#2E275C",
    },
  ];

  const aboutMeData = [
    { icon: "🔴", label: "Gender", value: "Male" },
    { icon: "🔵", label: "Age", value: "27" },
    { icon: "🟡", label: "Occupation", value: "Engineer" },
    { icon: "🟢", label: "Relationship", value: "Single" },
    { icon: "🟣", label: "Location", value: "Lagos" },
    { icon: "🟢", label: "Height range", value: "5’5 - 6’0" },
    { icon: "🔴", label: "Weight range", value: "60 - 70kg" },
    { icon: "🔵", label: "Religion", value: "Christianity" },
    { icon: "🟡", label: "Nationality", value: "Nigerian" },
  ];

  return (
    <div className="flex font-[inter-regular] gap-6 w-full flex-wrap md:flex-nowrap h-full">
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
                className={`flex items-center justify-center w-18 h-18 rounded-full m-auto  text-white`}
                style={{ backgroundColor: hobby.bg }}
              ></div>
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
                className={`flex items-center justify-center w-18 h-18 rounded-full m-auto  text-white`}
                style={{ backgroundColor: hobby.bg }}
              ></div>
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
              <span className="text-lg">{item.icon}</span>
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
