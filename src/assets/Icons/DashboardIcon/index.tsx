
const DashboardIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="20" height="20" fill="url(#pattern0_2197_356)" />
      <defs>
        <pattern
          id="pattern0_2197_356"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_2197_356" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_2197_356"
          width="100"
          height="100"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default DashboardIcon;
