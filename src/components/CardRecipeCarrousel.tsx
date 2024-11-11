import React from 'react';
import GenericRecipeCard from './GenericRecipeCard';

const CardRecipeCarrousel: React.FC = () => {
  const cardsData = [
    {
      imageSrc: "https://via.placeholder.com/129x144",
      heartVariant: "variant1" as 'variant1' | 'variant2',
      starVariants: ["variant1", "variant1", "variant1", "variant1", "variant1"] as ('variant1' | 'variant2')[],
      title: "Escalopes de pescado",
      prepTime: "30",
      difficultyLevel: "Nivel de dificultad",
      actionTexts: ["De mar", "Light"],
    },
    {
      imageSrc: "https://via.placeholder.com/129x144",
      heartVariant: "variant2" as 'variant1' | 'variant2',
      starVariants: ["variant2", "variant2", "variant2", "variant2", "variant2"] as ('variant1' | 'variant2')[],
      title: "Pejerrey al limón",
      prepTime: "25",
      difficultyLevel: "Nivel de dificultad",
      actionTexts: ["De mar", "Fácil"],
    },
    {
      imageSrc: "https://via.placeholder.com/129x144",
      heartVariant: "variant1" as 'variant1' | 'variant2',
      starVariants: ["variant1", "variant1", "variant1", "variant1", "variant1"] as ('variant1' | 'variant2')[],
      title: "Salmón al horno",
      prepTime: "40",
      difficultyLevel: "Nivel de dificultad",
      actionTexts: ["De mar", "Saludable"],
    },
  ];

  return (
      <div
          style={{
            width: '412px',
            overflowX: 'scroll',
            whiteSpace: 'nowrap',
            scrollbarWidth: 'none', // Oculta la barra en Firefox
          }}
          className="hide-scrollbar" // Agregamos una clase para ocultar la barra en otros navegadores
      >
        <div style={{ display: 'inline-flex', gap: '16px' }}>
          {cardsData.map((card, index) => (
              <div key={index} style={{ flex: '0 0 auto' }}>
                <GenericRecipeCard {...card} />
              </div>
          ))}
        </div>
      </div>
  );
};

export default CardRecipeCarrousel;
