import { FC } from "react";

interface BasketIconProps {
  color?: string;
  size?: number;
}

export const BasketIcon: FC<BasketIconProps> = ({ color = "#5B4637", size = 24 }) => {
  return (
    <div
      className="relative flex justify-center items-center"
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 8L5 5H19L20 8M4 8H20L19 21H5L4 8ZM10 12V16M14 12V16M4 8H20"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default BasketIcon;
