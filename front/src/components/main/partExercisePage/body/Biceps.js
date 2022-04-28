import React from "react";

export default function Biceps({ fill, onClick, onMouseOver, onMouseLeave }) {
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
      <path
        className="bt74"
        d="M327.7,299.9c0.2,0.1,0.5,0.2,0.7,0.3c3.4-3.9,3.4-3.9,1.4-5.4C329,296.6,328.3,298.2,327.7,299.9z"
      />
      <path
        className="bt6"
        d="M366.8,52.5c-0.4-0.3-0.9-0.5-1.4-0.7c-7.8-2.2-14.9,0.5-22,3c-2.4,0.7-4,3-3.9,5.5
	c-0.2,6.3-0.4,12.5-0.5,18.8c0.1,0.9,0.2,1.7,0.4,2.6c0.8-0.4,1.6-1,2.3-1.6c2.7-2.7,5.2-5.7,7.4-8.8c2.4-3.9,4.5-7.9,6.4-12.1
	c1.4-3.2,4.2-5.4,7.6-6.1C364.4,53,365.6,52.8,366.8,52.5z"
      />
      <path
        className="bt7"
        d="M344.8,221.7c0.3,0,0.7,0,1,0.1c0.8-2.1,1.7-4.3,2.4-6.4c1.7-4.8,3.8-9.5,5-14.4c2.9-11.6,1.1-23.1-0.3-34.6
	c-0.4-3.1-2.5-4.9-6-5.2c-1.3,8.3,0.5,16.5,1.2,24.7c0.6,6.8,0.7,13.7,0.2,20.5c-0.3,3.7-2.3,7.1-3.3,10.6
	C344.8,218.5,344.8,220.1,344.8,221.7L344.8,221.7z"
      />
      <path className="bt75" d="M271.2,151.4l0.7,2l3.3-5.9L271.2,151.4z" />
    </svg>
  );
}