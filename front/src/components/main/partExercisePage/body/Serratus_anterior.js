import React from "react";

export default function Serratus_anterior({
  fill,
  onClick,
  onMouseOver,
  onMouseLeave,
}) {
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
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <g>
        <path
          className="pt110"
          d="M143,86.6c-1.2-2-2.2-3.7-3.4-5.7C138.1,85,138.9,86.3,143,86.6z"
        />
        <path
          className="pt82"
          d="M142.3,80.5c0.8,3.8,2,6.7,4.8,9C148.6,85.6,148.1,84.7,142.3,80.5z"
        />
        <path
          className="pt72"
          d="M141.2,88.3c-0.1,2.9,2.6,6.7,5.7,7.8C147.9,91.9,146.2,89.5,141.2,88.3z"
        />
        <path
          className="pt52"
          d="M138.6,89.7c0.4,6.4,1.7,11.9,7.2,15.8c1.3-2.1,1.1-4.8-0.5-6.7C143.3,95.8,141,92.9,138.6,89.7z"
        />
        <path
          className="pt124"
          d="M179.7,82c0.3,0.4,0.6,0.8,1,1.1c1.2-1.1,2.4-2.3,3.8-3.4c-0.2-0.2-0.3-0.4-0.5-0.5
          C182.4,80.1,181,81.1,179.7,82z"
        />
        <path
          className="pt80"
          d="M181.9,89.2c0.3,0.1,0.6,0.3,0.9,0.4c1.4-2.7,2.8-5.6,4.4-8.3c-0.3-0.1-0.5-0.2-0.7-0.4
          C181,84.7,180.7,85.2,181.9,89.2z"
        />
        <path
          className="pt111"
          d="M186.4,86.6c4.1-0.1,4.9-1.7,3.1-5.6C188.4,82.9,187.5,84.6,186.4,86.6z"
        />
        <path
          className="pt73"
          d="M182.8,97.2l6.4-8.7C183.6,88.7,180.8,92.8,182.8,97.2z"
        />
        <path
          className="pt50"
          d="M190.6,89.7c-2.4,3.2-5,6.2-7.1,9.4c-1.2,1.8-1.3,4.1-0.2,6C187.8,102.9,190.6,96.8,190.6,89.7z"
        />
      </g>
      <g>
        <path
          className="bt23"
          d="M321,74.9c-2-4.9-3.7-8.8-5.5-12.9c-0.8-1.7-2.3-2.5-3.9-1.1c-3.4,2.8-5.7,6.8-6.5,11.1
	C310.4,73.1,315.3,73.9,321,74.9z"
        />
        <path
          className="bt24"
          d="M352.3,74.9c5.7-1,10.6-1.9,15.7-2.9c-0.6-4.3-2.8-7.3-5.4-10.1c-2.1-2.3-3.9-2.1-5.2,0.7
	C355.7,66.4,354.3,70.2,352.3,74.9z"
        />
      </g>
    </svg>
  );
}
