import { FC, ReactNode } from "react";

interface CarrouselProps {
  children: ReactNode; 
}

const Carrousel: FC<CarrouselProps> = ({ children }) => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex flex-nowrap gap-4">
        {children}
      </div>
    </div>
  );
};

export default Carrousel;
