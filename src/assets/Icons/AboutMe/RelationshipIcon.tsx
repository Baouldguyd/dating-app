const RelationshipIcon = () => {
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
        fill="url(#pattern0_2197_551)"
      />
      <defs>
        <pattern
          id="pattern0_2197_551"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_2197_551" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_2197_551"
          width="100"
          height="100"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default RelationshipIcon;
