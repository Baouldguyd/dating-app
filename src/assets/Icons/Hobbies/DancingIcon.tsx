const DancingIcon = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="30" height="30" fill="url(#pattern0_2197_483)" />
      <defs>
        <pattern
          id="pattern0_2197_483"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_2197_483" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_2197_483"
          width="100"
          height="100"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default DancingIcon;
