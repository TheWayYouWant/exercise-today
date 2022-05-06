import React, { useState } from "react";
import BackImage from "./BackImage";
import FrontImage from "./FrontImage";
import { StyledCardContainer } from "./MusicImage.style";
import "./style.css";

const MusicImage = ({ music }) => {
  const [filp, setFilp] = useState(false);
  const filpFunc = () => {
    setFilp((cur) => !cur);
  };

  return (
    <StyledCardContainer
      onMouseEnter={filpFunc}
      onMouseLeave={filpFunc}
      className={"card-container" + (filp ? " flipped" : "")}
    >
      <FrontImage src={music?.image_link} alt={music?.alt} />
      <BackImage music={music} closeModalFlip={filpFunc} />
    </StyledCardContainer>
  );
};

export default MusicImage;
