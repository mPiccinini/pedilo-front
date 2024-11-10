import { HeartIcon } from "@/icons/HeartIcon";
import { StarIcon } from "@/icons/StarIcon";

interface GenericRecipeCardProps {
  imageSrc: string;
  heartVariant: 'variant1' | 'variant2';
  starVariants: ('variant1' | 'variant2')[]; 
  title: string;
  prepTime: string;
  difficultyLevel: string; 
  actionTexts: string[]; 
}

function GenericRecipeCard({
  imageSrc,
  heartVariant,
  starVariants,
  title,
  prepTime,
  difficultyLevel,
  actionTexts,
}: GenericRecipeCardProps) {
  return (
    <div className="relative flex w-[326px] h-[134px] bg-primary-50 rounded-lg shadow-lg overflow-hidden">
      <div className="flex flex-col justify-between p-3 w-full h-full">
        <div className="flex flex-col">
          <h2 className="font-bold text-lg text-gray-800 mb-0">{title}</h2>
          <p className="text-sm text-gray-600 mb-0">{`Tiempo de preparación: ${prepTime}m`}</p>
          <p className="text-body2 text-gray-600 mb-1">{difficultyLevel}</p>
          <div className="flex space-x-1 mb-2">
            {[...Array(5)].map((_, index) => (
              <StarIcon
                key={index}
                variant={starVariants[index] || 'variant1'} 
                iconColor="currentColor"
                size="12.13px" 
              />
            ))}
          </div>
        </div>
        <div className="flex space-x-2">
          {actionTexts.map((text, idx) => (
            <div
              key={idx}
              className="bg-[#EBFCFF] text-gray-700 px-3 py-1 rounded-full text-xs flex items-center justify-center"
            >
              {text}
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-[129px] h-[144px]"> 
        <div className="absolute top-2 right-2 z-10">
          <HeartIcon variant={heartVariant} size="20px" iconColor="#531326" />
        </div>
        <img
          src={imageSrc}
          alt={`${title} image`}
          className="w-[129px] h-[144px] object-cover rounded-r-lg" 
        />
      </div>
    </div>
  );
}

export default GenericRecipeCard;
