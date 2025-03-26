const HeartIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="20" height="20" fill="url(#pattern0_2869_4)" />
      <defs>
        <pattern
          id="pattern0_2869_4"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_2869_4" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_2869_4"
          width="100"
          height="100"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default HeartIcon;
