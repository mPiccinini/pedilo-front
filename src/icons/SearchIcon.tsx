import { FC } from "react";
import { IconInterface } from "./IconInterface";

const SearchIcon: FC<IconInterface> = ({ iconColor, size }) => {
  const parsedSize = parseInt(size);

  return (
    <div
      style={{
        width: parsedSize,
        height: parsedSize,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        width={parsedSize}
        height={parsedSize}
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 13L10.1 10.1M11.6667 6.33333C11.6667 9.27885 9.27885 11.6667 6.33333 11.6667C3.38781 11.6667 1 9.27885 1 6.33333C1 3.38781 3.38781 1 6.33333 1C9.27885 1 11.6667 3.38781 11.6667 6.33333Z"
          stroke={iconColor}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default SearchIcon;
