import React from "react";
import SvgWrapper from "./SvgWrapper/SvgWrapper";
import { ReactComponent as LeftArrowSvg } from "../../../assets/svgs/leftArrow.svg";

const LeftArrow = (props) => {
  return (
    <SvgWrapper {...props}>
      <LeftArrowSvg />
    </SvgWrapper>
  );
};

export default LeftArrow;
