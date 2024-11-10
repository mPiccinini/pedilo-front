import React, { forwardRef } from 'react';
import { IconInterface } from './IconInterface';

export const StarIcon = forwardRef<SVGSVGElement, IconInterface & { variant?: 'variant1' | 'variant2' }>(({ iconColor = "#1D1B20", size = "24px", variant = "variant1" }, ref) => {
    return (
        <svg
            ref={ref}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {variant === "variant1" ? (
                <path
                    d="M4.59 24L6.54 15.1263L0 9.15789L8.64 8.36842L12 0L15.36 8.36842L24 9.15789L17.46 15.1263L19.41 24L12 19.2947L4.59 24Z"
                    fill={iconColor}
                />
            ) : (
                <path
                    d="M5.33621 22.9339L7.02835 15.2336L7.09032 14.9516L6.87705 14.757L1.17433 9.55267L8.6855 8.86635L8.99005 8.83852L9.104 8.55472L12 1.34193L14.896 8.55472L15.01 8.83852L15.3145 8.86635L22.8257 9.55267L17.123 14.757L16.9097 14.9516L16.9717 15.2336L18.6638 22.9339L12.268 18.8726L12 18.7025L11.732 18.8726L5.33621 22.9339Z"
                    fill="#FEF7FF"
                    stroke={iconColor}
                />
            )}
        </svg>
    );
});

export default StarIcon;
