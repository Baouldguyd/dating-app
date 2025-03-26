
const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div className="flex items-center gap-2 font-[inter-regular]">
      {/* Progress Bar Container */}
      <div className="relative w-60 h-2 bg-gray-300 rounded-full overflow-hidden">
        {/* Progress Fill */}
        <div
          className="h-full bg-[#EF2424] rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Percentage Label */}
      <span className="text-black  text-sm font-medium">{progress}%</span>
    </div>
  );
};

export default ProgressBar;

