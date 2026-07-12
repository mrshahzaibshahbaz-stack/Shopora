import * as React from 'react';
import Svg, { Circle, SvgProps, Path } from 'react-native-svg';

export const SendIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M19.9999 4C19.9999 4 15.9999 5 10.9999 7C8.14778 8.14086 5.9464 9.28173 4.58143 10.0514C3.88969 10.4414 3.9668 11.4144 4.69672 11.7272L9.99994 14L12.2727 19.3032C12.5856 20.0331 13.5585 20.1103 13.9486 19.4185C14.7182 18.0535 15.8591 15.8522 16.9999 13C18.9999 8 19.9999 4 19.9999 4ZM9.99994 14L19.9999 4"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const VideoIcon = (props: SvgProps) => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    {...props}
  >
    <Path
      d="M0 4.09603V9.95572C0.0053125 11.2807 1.0875 12.347 2.40719 12.3417H10.9481C11.1909 12.3417 11.3862 12.1463 11.3862 11.9088V6.04947C11.3809 4.72447 10.2991 3.6579 8.97906 3.66322H0.438125C0.195313 3.66322 0 3.85853 0 4.09603ZM11.93 6.38197L15.4563 3.80572C15.7625 3.55259 16 3.61572 16 4.07509V11.9298C16 12.4526 15.7097 12.3892 15.4563 12.1992L11.93 9.62822V6.38197Z"
      fill="#4A8CFF"
    />
  </Svg>
);
