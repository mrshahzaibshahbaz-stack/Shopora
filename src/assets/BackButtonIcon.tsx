import * as React from "react";
import Svg, { Circle, Path, SvgProps } from "react-native-svg";

function BackButtonIcon(props: SvgProps) {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 60 60"
      fill="none"
      {...props}
    >
      <Circle
        cx="30"
        cy="30"
        r="26"
        fill="#ECF0F4"
      />

      <Path
        d="M34 36L26 30L34 24"
        stroke="#181C2E"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default BackButtonIcon;