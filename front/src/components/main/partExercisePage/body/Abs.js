import React from "react";

export default function Abs({ fill, onClick }) {
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
        class="pt110"
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
        className="pt11"
        d="M150.7,132.4c-0.6-7.4-1-14-1.9-20.5c-0.3-1.7-2.2-3.5-3.8-4.8c-1.9-1.5-3-0.8-3.1,1.7c-0.2,4.1,0,8.1-0.8,12
      c-1.2,6.2,2.9,9.9,7.8,12.2C149.3,133.1,150.4,132.4,150.7,132.4L150.7,132.4z"
      />
      <path
        className="pt34"
        d="M151.4,91.8c3.5-1.1,6.8-2,10-3.1c0.7-0.3,1.2-1,1.3-1.7c0.2-1.3,0.2-2.5,0-3.8c-0.2-0.7-0.7-1.3-1.4-1.5
      c-3.1-0.4-6.3,0.8-8.4,3.1C151,86.6,150.4,89.4,151.4,91.8L151.4,91.8z"
      />
      <path
        className="pt25"
        d="M162.8,100.9v-5.1c0-4.5-1.7-5.7-5.9-4.1c-1.3,0.6-2.6,1.3-3.7,2.2c-2.5,2.3-3,6-1.5,7.8
      C155.5,101.4,158.9,101.2,162.8,100.9z"
      />
      <path
        className="pt23"
        d="M162.8,109.5c0-5.9-1-6.8-6.7-6.3c-3.8,0.4-6.5,5.1-4.7,8.5c0.3,0.6,1.3,0.9,2.1,1.1c1.4,0.3,2.8,0.2,4.3,0.5
      C162.8,114.7,162.8,114.9,162.8,109.5z"
      />
      <path
        className="pt5"
        d="M162.7,131.9c0.1-2.7,0.1-5.6,0.1-8.3c0-5.7-2.5-8.2-8.2-8.4c-1.7-0.1-2.7,0.4-2.5,2.4c0.2,2.4,0,5.1,0.6,7.4
      c1.4,5.9,3,11.7,4.9,17.3c0.3,1,2.1,1.5,3.2,2.2c0.6-1.1,1.6-2.1,1.7-3.3C162.8,138.3,162.7,135.2,162.7,131.9L162.7,131.9z"
      />
      <path
        className="pt36"
        d="M177.7,91.8c1.3-4.7-1-8.4-6.2-9.8c-4.2-1.1-5.2-0.4-5,3.9c0,1,0.5,2.5,1.2,2.8
      C170.9,89.7,174.3,90.7,177.7,91.8z"
      />
      <path
        className="pt26"
        d="M177.7,101.8c1-2.4,0.5-5.2-1.2-7.1c-1.9-2.5-4.9-3.7-8-3.3c-0.8,0.2-1.5,0.7-1.9,1.4
      c-0.2,2.7-0.1,5.6-0.1,8.1C170.4,101.2,173.9,101.4,177.7,101.8z"
      />
      <path
        className="pt24"
        d="M166.5,114.5c3.8-0.5,7.1-1,10.4-1.6c0.4-0.1,0.8-0.9,0.9-1.4c0.8-2.5,0-5.3-2-7c-1.7-1.3-6.8-1.5-8.4-0.3
      c-0.5,0.4-0.8,0.9-0.9,1.5V114.5z"
      />
      <path
        className="pt8"
        d="M165.9,131.7c0.2,0,0.5,0,0.7,0.1c0,3.1-0.1,6.3,0.1,9.4c0.3,1.2,0.8,2.4,1.5,3.4c1.1-0.7,2.3-1.3,3.4-2
      c0.4-0.4,0.7-0.9,0.8-1.4c2.9-7.6,4.6-15.6,4.9-23.7c0-0.7-0.2-1.3-0.6-1.8c-1.6-1.3-8.5,0.6-8.8,2.7
      C167,122.7,166.5,127.2,165.9,131.7z"
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
      <path
        className="pt12"
        d="M187.5,121c0-4.1,0.1-8.2,0-12.3c0-2.1-1-2.8-2.9-1.9c-2.3,1.1-4.2,2.9-4.5,5.7c-0.7,6.2-1.1,12.5-1.7,18.7
      c-0.2,2.1,0.8,2.6,2.5,1.7C186.5,129.6,189.1,126.8,187.5,121z"
      />
    </svg>
  );
}