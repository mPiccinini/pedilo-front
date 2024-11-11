import { FC } from "react";

interface CancelIconProps {
  size?: number; 
  color?: string; 
}

const CancelIcon: FC<CancelIconProps> = ({ size = 16, color = "#1E1E1E" }) => (
  <svg
    width={size}
    height={(size * 21) / 16}
    viewBox="0 0 16 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 5.25L4 15.75M4 5.25L12 15.75"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CancelIcon;
