import CardIngredients from "@/components/CardIngredients"; 

interface CardIngCarrouselProps {
    imageSrcs: string[];  
    variants: ('variant1' | 'variant2')[];  
    titles: string[];  
    descriptions: string[];  
  }
  
  function CardIngCarrousel({ imageSrcs, variants, titles, descriptions }: CardIngCarrouselProps) {
    return (
      <div className="flex gap-3 overflow-x-auto py-4 px-2">
        {imageSrcs.map((src, index) => (
          <CardIngredients 
            key={index}
            imageSrc={src} 
            variant={variants[index]} 
            title={titles[index]} 
            description={descriptions[index]} 
          />
        ))}
      </div>
    );
  }
  
  export default CardIngCarrousel;