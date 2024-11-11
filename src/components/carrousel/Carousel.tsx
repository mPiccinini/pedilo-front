// Carousel.tsx
import React from 'react';

interface CarouselProps {
    children: React.ReactNode;
    width?: string;
}

const Carousel: React.FC<CarouselProps> = ({ children, width= 'w-full' }) => {
    return (
        <div
            className={`overflow-x-auto flex gap-4 py-4 pl-2 pb-4 hide-scrollbar ${width}`}
            style={{
                scrollbarWidth: 'none', // Hide scrollbar in Firefox
            }}
        >
            {React.Children.map(children, (child) => (
                <div className="flex-shrink-0">{child}</div>
            ))}
        </div>
    );
};

export default Carousel;
