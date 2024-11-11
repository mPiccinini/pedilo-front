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
                overflowX: 'scroll',
                whiteSpace: 'nowrap',
                scrollbarWidth: 'none',
            }}
            className="hide-scrollbar"
        >
            <div style={{ display: 'inline-flex', gap: '16px' }}>
                {React.Children.map(children, (child) => (
                    <div style={{ flex: '0 0 auto' }}>{child}</div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
