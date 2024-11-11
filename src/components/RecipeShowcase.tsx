import { useState } from 'react';
import { HeartIcon } from '@/icons/HeartIcon';

interface RecipeShowcaseProps {
  image: string;
  name: string;
  time: string;
  size: 'large' | 'medium' | 'small';
  favourite: boolean;
}

export default function RecipeShowcase({ image, name, time, size, favourite }: RecipeShowcaseProps) {
  const [isFavourite, setIsFavourite] = useState(favourite);

  const toggleFavourite = () => setIsFavourite(!isFavourite);

  // Define size-specific styles
  const sizeStyles = {
    large: 'w-[390px] h-[160px]',
    medium: 'w-[250px] h-[160px]',
    small: 'w-[120px] h-[160px]',
  };

  return (
    <div className={`relative bg-white rounded-[16px] shadow-custom-light ${sizeStyles[size]}`}>
      {/* Heart Icon positioned outside the container */}
      <div 
        className="absolute -top-3 -right-3 cursor-pointer z-10" 
        onClick={toggleFavourite}
      >
        <HeartIcon
          variant={isFavourite ? 'variant2' : 'variant1'}
          iconColor="currentColor"
          size="28px" // Slightly larger size to emphasize the heart
        />
      </div>

      {/* Image with fixed height, covering the rest of the component height */}
      <img src={image} alt={name} className="w-full h-[calc(100%-40px)] object-cover rounded-t-[16px]" />

      {/* Recipe details in a fixed-height container */}
      <div className="w-full h-[40px] bg-primary-50 px-2 flex flex-col justify-center rounded-b-[16px]">
        <span className="text-sm font-bold font-roboto whitespace-nowrap overflow-hidden overflow-ellipsis">{name}</span>
        <span className="text-xs text-gray-600 font-roboto whitespace-nowrap">{time}</span>
      </div>
    </div>
  );
}
