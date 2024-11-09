import { FC } from "react";

interface RecipeIconProps {
  color?: string;
  size?: number;
}

const RecipeIcon: FC<RecipeIconProps> = ({ color = "#000", size = 24 }) => {
  return (
    <div
      className="flex justify-center items-center"
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
          d="M6 4H18V20H6V4ZM8 2H16V4H8V2ZM10 7H14V9H10V7ZM10 11H14V13H10V11Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default RecipeIcon;
