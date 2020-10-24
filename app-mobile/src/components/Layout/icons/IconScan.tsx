import React from "react";
import { Svg, Path } from "react-native-svg";

interface IconProps {
  handleFill?: string;
}

const Icon: React.FC<IconProps> = ({ handleFill }): JSX.Element => {
  return (
    <Svg width="19.5" height="30" viewBox="0 0 19.5 30">
      <Path
        fill={handleFill ?? "none"}
        fillRule="evenodd"
        stroke="#a6c98a"
        strokeWidth="2"
        d="M1 4.5A3.5 3.5 0 014.5 1H15a3.5 3.5 0 013.5 3.5v21A3.5 3.5 0 0115 29H4.5A3.5 3.5 0 011 25.5zm10.5 19.25a1.75 1.75 0 11-.513-1.237 1.75 1.75 0 01.513 1.237z"
      ></Path>
    </Svg>
  );
};

export default Icon;
