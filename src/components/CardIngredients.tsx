import { HeartIcon } from "@/icons/HeartIcon";

interface CardIngredientsProps {
  imageSrc: string;
  variant: 'variant1' | 'variant2'; 
  title: string;  
  description: string;  
}

function CardIngredients({ imageSrc, variant, title, description }: CardIngredientsProps) {
  return (
    <div 
      className="relative flex flex-col items-center p-2 shadow-lg bg-primary-50 rounded-lg w-[123px] h-[142px]"
    >
      <div 
        className="absolute top-[-5px] right-[-10px] z-10 w-[20px] h-[19px]"
      >
        <HeartIcon iconColor="#531326" size="20px" variant={variant} />
      </div>

      <img 
        src={imageSrc} 
        alt="Product image" 
        className="absolute top-[11px] left-[7px] w-[109px] h-[80px] rounded-lg object-cover"
      />

      <div 
        className="absolute top-[97px] left-[8px] w-[120px] h-[36px] text-left"
      >
        <p className="title3 text-gray-800 leading-none truncate">{title}</p> 
        <p className="body3 text-gray-600 leading-none truncate mt-0">{description}</p> 
      </div>
    </div>
  );
}

export default CardIngredients;
