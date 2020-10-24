import React from "react";
import { Svg, Path, G } from "react-native-svg";

interface IconProps {
  handleFill?: string;
}

const Icon: React.FC<IconProps> = ({ handleFill }): JSX.Element => {
  return (
    <Svg width="58" height="58" viewBox="0 0 58 58">
      <G data-name="Group 5">
        <G transform="translate(-21 -604) translate(21 604)">
          <G fill={handleFill ?? "none"} data-name="Path 30">
            <Path
              d="M14 0A14 14 0 110 14 14 14 0 0114 0z"
              transform="translate(15 11)"
            ></Path>
            <Path
              fill="#a6c98a"
              d="M14 3c-2.938 0-5.7 1.144-7.778 3.222A10.928 10.928 0 003 14c0 2.938 1.144 5.7 3.222 7.778A10.928 10.928 0 0014 25c2.938 0 5.7-1.144 7.778-3.222A10.928 10.928 0 0025 14c0-2.938-1.144-5.7-3.222-7.778A10.928 10.928 0 0014 3m0-3c7.732 0 14 6.268 14 14s-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0z"
              transform="translate(15 11)"
            ></Path>
          </G>
        </G>
        <G transform="translate(-21 -604) translate(21 604)">
          <Path
            fill="none"
            stroke="#a6c98a"
            strokeWidth="2"
            d="M28.68 19.37v10.5"
            data-name="Path 31"
          ></Path>
        </G>
        <G transform="translate(-21 -604) translate(21 604)">
          <Path
            fill="none"
            stroke="#a6c98a"
            strokeWidth="2"
            d="M33.87 24.68h-10.5"
            data-name="Path 32"
          ></Path>
        </G>
      </G>
    </Svg>
  );
};

export default Icon;
