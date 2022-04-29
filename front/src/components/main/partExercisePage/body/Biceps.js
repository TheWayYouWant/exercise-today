import React from "react";

export default function Biceps({ fill, onClick }) {
  return (
    <svg
      style={{
        fill: fill === undefined ? "#cdcccc" : fill,
        fillOpacity: 1,
        stroke: "gray",
        strokeMiterlimit: "1",
        cursor: "pointer",
        opacity: fill === undefined ? 0 : 1,
      }}
      onClick={onClick}
    >
      <path
        class="pt74"
        d="M125,76c-4.9,3.9-6.3,22.2-1.8,26.8C119.6,93.4,121.4,84.7,125,76z"
      />
      <path
        class="pt6"
        d="M133.4,72.4c-1.7,0.7-3.3,1.3-5,2c-0.6,0.3-1.3,0.7-1.5,1.3c-1.5,5.9-3.1,11.9-4.3,17.8
		c-0.1,1.8,0.6,3.5,2,4.7c2,1.2,3.8-0.5,5.2-2.1c0.3-0.3,0.5-0.7,0.7-1.1c3.3-4.7,4.6-10.1,5.7-15.7C136.9,76.3,137,73.6,133.4,72.4
		z"
      />
      <path
        class="pt88"
        d="M122.9,104.9c4.4-1.5,7.8-4.9,9.2-9.3c0.3,0.3,0.6,0.7,0.9,1C129.7,99.5,126.3,102.3,122.9,104.9z"
      />
      <path
        class="pt7"
        d="M195.3,71.9c-1,1.5-2.8,2.9-2.6,4.1c0.6,5.9,1.6,11.7,4.7,16.8c1,1.9,2.4,3.6,4,5c2.1,1.8,4.6,0.8,5.1-2
		c0.3-1.1,0.3-2.3,0.2-3.4c-0.7-4-1.7-7.8-2.5-11.8c-0.8-3.8-2.2-6.9-6.6-7.5C196.7,72.9,196,72.5,195.3,71.9z"
      />
      <path
        class="pt75"
        d="M204.3,76.1c3.5,8.6,5.4,17.2,1.7,26.9C210.4,98.2,209,80.1,204.3,76.1z"
      />
      <path
        class="pt90"
        d="M205.9,105.4l0.8-0.8c-3.7-2.8-7.4-5.7-11.1-8.5l1-1C198.1,99.7,201.5,103.4,205.9,105.4z"
      />
    </svg>
  );
}
