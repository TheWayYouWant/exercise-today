import React from "react";

// style= {{ state === hovering ? style1 : style2 }}
// mouseOver, mouseLeave로 state관리
// onMouse={()=> setState('hovering'))}
export default function Lats({ fill, onClick, onMouseOver, onMouseLeave }) {
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
        className="bt1"
        d="M334.6,135.1c0.2-0.7,0.4-1.5,0.4-2.3c-0.4-12.4-0.7-24.6-1.3-37c-0.2-3.3-0.2-7-2.7-9.8
    c-4.3-4.9-9-8.8-15.7-9.7c-3.1-0.4-6.4-1-10-1.6c0.5,2,0.7,3.2,1.1,4.4c4.5,12.9,8.9,25.8,13.6,38.5c0.8,2.1,2,3.9,3.5,5.6
    c2.6,3.2,5.6,6.3,8.4,9.3C332.8,133.4,333.7,134.2,334.6,135.1z"
      />
      <path
        className="bt2"
        d="M368.1,75.1c-1-0.1-2-0.1-3,0c-4.3,0.9-8.6,1.5-12.8,2.9c-5,1.7-8.2,5.8-11.3,9.9c-0.6,0.9-0.9,1.9-1,3
    c-0.7,13.5-1.3,27-1.9,40.5c0,1.1,0.2,2.2,0.3,3.3c0.5,0.3,0.9,0.6,1.3,1c0.3-0.9,0.7-1.8,1.2-2.6c2.4-2.9,5.1-5.7,7.5-8.7
    c1.8-2.2,3.9-4.6,4.9-7.1c4-10.1,7.5-20.4,11.2-30.6C365.7,82.8,366.8,79.2,368.1,75.1z"
      />
    </svg>
  );
}