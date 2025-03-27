import React from "react";

const ReligionIcon = () => {
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
        fill="url(#pattern0_2197_575)"
      />
      <defs>
        <pattern
          id="pattern0_2197_575"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_2197_575" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_2197_575"
          width="100"
          height="100"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default ReligionIcon;
