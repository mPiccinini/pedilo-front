// Carousel.tsx
import React from 'react';

interface CarouselProps {
    children: React.ReactNode;
    widthClass?: string;
}

const Carousel: React.FC<CarouselProps> = ({ children, widthClass = 'w-[412px]' }) => {
    return (
        <div
            className={`overflow-x-auto flex gap-4 py-2 pl-4 pb-4 hide-scrollbar ${widthClass}`}
            style={{
                scrollbarWidth: 'none',
            }}
        >
            {React.Children.map(children, (child) => (
                <div className="flex-shrink-0">{child}</div>
            ))}
        </div>
    );
};

export default Carousel;