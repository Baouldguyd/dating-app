const InterestedInMeIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="20" height="20" fill="url(#pattern0_2197_375)" />
      <defs>
        <pattern
          id="pattern0_2197_375"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_2197_375" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_2197_375"
          width="100"
          height="100"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default InterestedInMeIcon;
