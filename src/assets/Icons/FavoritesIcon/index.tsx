import React from "react";

const FavoritesIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="20" height="20" fill="url(#pattern0_2197_364)" />
      <defs>
        <pattern
          id="pattern0_2197_364"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_2197_364" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_2197_364"
          width="100"
          height="100"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default FavoritesIcon;
