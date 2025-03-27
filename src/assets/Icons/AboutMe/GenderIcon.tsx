const GenderIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect
        x="0.5"
        y="0.5"
        width="15"
        height="15"
        fill="url(#pattern0_2197_533)"
      />
      <defs>
        <pattern
          id="pattern0_2197_533"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_2197_533" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_2197_533"
          width="100"
          height="100"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default GenderIcon;
