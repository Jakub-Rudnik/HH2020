import React from "react";
import { Svg, Path } from "react-native-svg";

interface IconProps {
  handleFill?: string;
}

const Icon: React.FC<IconProps> = ({ handleFill }): JSX.Element => {
  return (
    <Svg width="31.333" height="30" viewBox="0 0 31.333 30">
      <Path
        fill={handleFill ?? "none"}
        stroke="#a6c98a"
        strokeWidth="2"
        d="M15.667 1.001a5.567 5.567 0 00-4.684 2.207 9.035 9.035 0 00-1.688 5.646 8.6 8.6 0 002.75 6.771.865.865 0 01.25.854l-.479 1a1.769 1.769 0 01-.677.781 11.843 11.843 0 01-1.886.8l-2.635.854q-2.573.833-2.74.917a5.183 5.183 0 00-2.295 1.523Q1 23.667 1 29h29.334q0-5.333-.583-6.646a5.183 5.183 0 00-2.292-1.521q-.167-.083-2.74-.917l-2.636-.853a11.846 11.846 0 01-1.885-.8 1.771 1.771 0 01-.677-.781l-.479-1a.865.865 0 01.25-.854 8.6 8.6 0 002.75-6.771 9.035 9.035 0 00-1.687-5.646 5.567 5.567 0 00-4.688-2.21z"
      ></Path>
    </Svg>
  );
};

export default Icon;
