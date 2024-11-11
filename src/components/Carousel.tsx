// Carousel.tsx
import React from 'react';

interface CarouselProps {
    children: React.ReactNode;
    width?: string;
}

const Carousel: React.FC<CarouselProps> = ({ children, width = '412px' }) => {
    return (
        <div
            style={{
                width,
                overflowX: 'auto',
                display: 'flex',
                gap: '16px',
                padding: '10px 0',
                scrollbarWidth: 'none', // Oculta la barra en Firefox
            }}
            className="hide-scrollbar"
        >
            {React.Children.map(children, (child) => (
                <div style={{ flex: '0 0 auto' }}>{child}</div>
            ))}
        </div>
    );
};

export default Carousel;
