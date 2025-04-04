const CookingIcon = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="30" height="30" fill="url(#pattern0_2197_479)" />
      <defs>
        <pattern
          id="pattern0_2197_479"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_2197_479" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_2197_479"
          width="100"
          height="100"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default CookingIcon;
