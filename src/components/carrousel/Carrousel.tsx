import React, { FC, ReactNode } from "react";

interface CarrouselProps {
  children: ReactNode;
}

const Carrousel: FC<CarrouselProps> = ({ children }) => {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex flex-row gap- overflow-x-auto scroll-smooth p-4 snap-x snap-mandatory no-scrollbar">
        {React.Children.map(children, (child) => (
          <div className="snap-start flex-shrink-0 w-[140px]">{child}</div>
        ))}
      </div>
    </div>
  );
};

export default Carrousel;
