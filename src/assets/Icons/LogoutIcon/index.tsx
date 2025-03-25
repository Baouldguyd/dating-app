import React from "react";

const LogoutIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="20" height="20" fill="url(#pattern0_2197_383)" />
      <defs>
        <pattern
          id="pattern0_2197_383"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_2197_383" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_2197_383"
          width="100"
          height="100"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default LogoutIcon;
