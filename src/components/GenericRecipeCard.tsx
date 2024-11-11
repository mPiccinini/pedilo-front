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
    <div className="relative flex w-[240px] h-[140px] bg-primary-50 rounded-lg shadow-lg overflow-hidden"> {/* Ajuste de tamaño de tarjeta */}
      <div className="flex flex-col justify-between p-2 w-full">
        <div className="flex flex-col mb-1">
          <h2 className="font-bold text-[14px] text-gray-800 mb-1 truncate">{title}</h2>
          <p className="text-xs text-gray-600 mb-0">{`Tiempo de preparación: ${prepTime}m`}</p>
          <p className="text-body2 text-gray-600 mb-1">{difficultyLevel}</p>
          <div className="flex space-x-1 mb-1">
            {[...Array(5)].map((_, index) => (
              <StarIcon
                key={index}
                variant={starVariants[index] || 'variant1'}
                iconColor="currentColor"
                size="12px"
              />
            ))}
          </div>
        </div>
        <div className="flex space-x-1">
          {actionTexts.map((text, idx) => (
            <div
              key={idx}
              className="bg-[#EBFCFF] text-gray-700 px-2 py-0.5 rounded-full text-xs flex items-center justify-center"
            >
              {text}
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-[90px] h-full"> {/* Ajusta el tamaño de la imagen */}
        <div className="absolute top-2 right-2 z-10">
          <HeartIcon variant={heartVariant} size="18px" iconColor="#531326" />
        </div>
        <img
          src={imageSrc}
          alt={`${title} image`}
          className="w-full h-full object-cover rounded-r-lg" /* Ajusta el tamaño de la imagen */
        />
      </div>
    </div>
  );
}

export default GenericRecipeCard;
