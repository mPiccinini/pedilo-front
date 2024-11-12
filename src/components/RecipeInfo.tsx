import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import ScrollDots from '@/icons/ScrollDots';

interface RecipeInfoProps {
  steps: string[];
  stepsDescription: string[];
  stepsImages: string[];
}

export default function RecipeInfo({
  steps,
  stepsDescription,
  stepsImages,
}: RecipeInfoProps) {
  const [selectedStep, setSelectedStep] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setSelectedStep((prevStep) => (prevStep < steps.length - 1 ? prevStep + 1 : prevStep));
    },
    onSwipedRight: () => {
      setSelectedStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep));
    },
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div
      {...handlers}
      className="max-w-sm bg-white rounded-[20px] shadow-custom-light text-center overflow-hidden h-auto flex flex-col justify-between select-none" // Add select-none to prevent text selection
    >
      <img
        src={stepsImages[selectedStep]}
        alt={`Step ${selectedStep + 1}`}
        className="w-full h-36 object-cover"
        draggable="false" // Disable image dragging
      />
      <div className="p-4 flex-grow flex flex-col justify-between mt-2">
        <h2 className="font-poppins text-headline1 mb-2 text-center">{steps[selectedStep]}</h2>
        <div className="flex-grow flex items-center justify-center">
          <p className="font-roboto text-body1 text-gray-600 overflow-hidden text-ellipsis max-h-25 text-center px-6">
            {stepsDescription[selectedStep]}
          </p>
        </div>
      </div>
      <div className="mb-4 flex justify-center">
        <ScrollDots
          dotsAmount={steps.length}
          selectedIndex={selectedStep}
          onDotClick={(index) => setSelectedStep(index)}
        />
      </div>
    </div>
  );
}
