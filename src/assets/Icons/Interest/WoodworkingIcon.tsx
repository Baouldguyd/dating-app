import React from "react";

const WoodworkingIcon = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="30" height="30" fill="url(#pattern0_2197_511)" />
      <defs>
        <pattern
          id="pattern0_2197_511"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_2197_511" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_2197_511"
          width="100"
          height="100"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default WoodworkingIcon;
