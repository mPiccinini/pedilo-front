import { FC } from "react";
import SearchIcon from "../icons/SearchIcon";

interface SearchBarProps {
  placeholder?: string;
  variant?: "rounded" | "default" | "compact";
}

const SearchBar: FC<SearchBarProps> = ({ placeholder = "Buscar", variant = "rounded" }) => {
  const containerClasses = 
    variant === "rounded"
      ? "w-[350px] h-12 px-4 py-3 bg-white rounded-full border border-[#531226] justify-between items-center gap-2 flex"
      : variant === "default"
      ? "w-[350px] h-12 px-4 py-3 bg-white rounded border border-[#531226] justify-between items-center gap-2 flex"
      : "w-[287px] h-12 px-4 py-3 bg-white rounded border border-[#531226] justify-between items-center gap-2 flex"; 
  return (
    <div className="h-12 justify-start items-start inline-flex">
      <div className={containerClasses}>
        <input
          type="text"
          placeholder={placeholder}
          className="grow text-label1 text-[#1e1e1e] placeholder:text-[#1e1e1e] placeholder:font-semibold focus:outline-none"
        />
        <SearchIcon iconColor="#1e1e1e" size="16" />
      </div>
    </div>
  );
};

export default SearchBar;
  