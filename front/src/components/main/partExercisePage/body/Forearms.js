import React from "react";

export default function Forearms({ fill, onClick, onMouseOver, onMouseLeave }) {
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
        className="pt17"
        d="M119.4,98.9c-3.5,3.3-5.8,7.8-7.6,15.5c-1.9,8.5-3.7,17-9.2,24.3c0.6-0.1,1.2-0.5,1.6-1
	c4-6.2,7.7-12.5,11.7-18.6S121.4,106.4,119.4,98.9z"
      />
      <path
        className="pt53"
        d="M123.8,115.1c-9.6,5.4-11.4,16.1-17,24.1C112.4,131.2,118.1,123.1,123.8,115.1z"
      />
      <path
        className="pt71"
        d="M109.2,140.9c0.3,0.2,0.6,0.3,0.9,0.5c4.3-7.2,8.4-14.3,12.7-21.5c-0.4-0.2-0.7-0.4-1.1-0.6
	C117.6,126.5,113.5,133.7,109.2,140.9z"
      />
      <path
        className="pt67"
        d="M128.7,112.9l-0.6-0.3c-4,7.4-7.9,14.8-11.9,22.3C121.2,127.9,126.5,121.3,128.7,112.9z"
      />
      <path
        className="pt65"
        d="M213.6,135.8c-4.3-7.8-8.4-15.7-12.7-23.5C202.7,121.5,208.4,128.4,213.6,135.8z"
      />
      <path
        className="pt70"
        d="M219.1,141.5c0.2-0.1,0.3-0.2,0.5-0.3c-3.5-7.6-7.4-15.1-13.3-21.3C210.6,127,214.9,134.2,219.1,141.5z"
      />
      <path
        className="pt54"
        d="M222.5,139c-5.7-7.8-7.3-18.5-16.7-23.6C211.3,123.3,216.9,131.3,222.5,139z"
      />
      <path
        className="pt18"
        d="M226.1,138.9c0.2-0.1,0.4-0.3,0.6-0.4c-4.8-6.2-6.9-13.4-8.6-20.8c-1.2-4.7-2.7-9.3-4.5-13.7
	c-0.7-1.8-2.2-3.4-3.7-5.4c-2.2,8.1-0.5,14.8,3.7,21.2c4,5.9,7.5,12,11.3,17.8C225.2,138.1,225.6,138.5,226.1,138.9L226.1,138.9z"
      />
    </svg>
  );
}
