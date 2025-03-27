import React from "react";

const KnittingIcon = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="30" height="30" fill="url(#pattern0_2197_524)" />
      <defs>
        <pattern
          id="pattern0_2197_524"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_2197_524" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_2197_524"
          width="100"
          height="100"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default KnittingIcon;
