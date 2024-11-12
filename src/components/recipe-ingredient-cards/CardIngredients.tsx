import React, { useState } from 'react';
import { HeartIcon } from "@/icons/HeartIcon";

interface CardIngredientsProps {
  imageSrc: string;
  variant: 'variant1' | 'variant2';
  title: string;
  description: string;
}

const CardIngredients: React.FC<CardIngredientsProps> = ({ imageSrc, variant, title, description }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseDown = () => setIsClicked(true);
  const handleMouseUp = () => setIsClicked(false);

  return (
      <div
          className={`relative flex flex-col items-center p-2 bg-primary-50 rounded-lg w-[123px] h-[142px] transition-shadow cursor-pointer ${
              isClicked ? '' : 'shadow-lg'
          }`} // Toggle shadow on click
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp} // Reset shadow when mouse leaves
      >
        <div className="absolute top-[-5px] right-[-10px] z-10 w-[20px] h-[19px]">
          <HeartIcon iconColor="#531326" size="20px" variant={variant} />
        </div>

        <img
            src={imageSrc}
            alt="Product image"
            className="absolute top-[11px] left-[7px] w-[109px] h-[80px] rounded-lg object-cover"
        />

        <div className="absolute top-[92px] left-[8px] w-[107px] text-left">
          <p className="text-sm font-semibold text-gray-800 leading-tight">{title}</p>
          <p className="text-xs text-gray-600 mt-0.5 truncate">{description}</p>
        </div>
      </div>
  );
}

export default CardIngredients;
