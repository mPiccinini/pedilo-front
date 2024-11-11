import React from "react";
import RecipeIcon from "../icons/RecipeIcon"; 
import Divider from "@/icons/Divider";

const SearchResult: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => {
  return (
    <div className="w-[360px] flex flex-col gap-2">
      <div className="flex items-center gap-4"> {/* Cambié items-start a items-center */}
        <div className="flex items-center justify-center mt-[1px]"> {/* Alineación precisa del ícono */}
          <RecipeIcon variant="variant1" iconColor="#000" size="24px" />
        </div>
        <div className="flex flex-col">
          <span className="text-body1 text-[#1d1b20]">{title}</span>
          <span className="text-label3 text-[#1d1b20]">{subtitle}</span>
        </div>
      </div>
      <Divider width="360px" className={"bg-primary-700"} />
    </div>  
  );
};

export default SearchResult;
