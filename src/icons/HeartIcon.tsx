import React, { forwardRef } from 'react'; 
import { IconInterface } from './IconInterface';  

export const HeartIcon = forwardRef<SVGSVGElement, IconInterface & { variant?: 'variant1' | 'variant2' }>(({ iconColor = "currentColor", size = "24px", variant = "variant1" }, ref) => {
    
    const colorMap = {
        variant1: '#f1d4da', 
        variant2: '#450c17', 
    };

    const heartColor = colorMap[variant] || iconColor;

    return (
        <svg
            ref={ref}
            width={size}
            height={size}
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {variant === "variant1" ? (
                <path
                    d="M9.63931 2.01073L10 2.38643L10.3607 2.01073C12.8646 -0.597339 17.3166 0.350241 18.9159 3.51494C19.6999 5.06631 19.8102 7.20034 18.5249 9.7697C17.2589 12.3007 14.6395 15.2447 9.99999 18.3969C5.3605 15.245 2.74107 12.3011 1.47506 9.77023C0.189843 7.20093 0.300147 5.06686 1.08413 3.51541C2.68343 0.350508 7.13548 -0.5973 9.63931 2.01073Z"
                    fill={heartColor}
                    stroke="#531326"
                />
            ) : (
                <path
                    d="M9.65471 1.88738L10 2.21707L10.3453 1.88738C11.5983 0.691002 13.3364 0.302627 14.9851 0.590521C16.6375 0.879079 18.1418 1.83738 18.9243 3.2567C19.6949 4.65464 19.8097 6.58189 18.5332 8.92109C17.2712 11.2339 14.6521 13.934 9.99999 16.8289C5.34786 13.9343 2.72882 11.2343 1.46678 8.92158C0.19033 6.58244 0.305069 4.65515 1.07575 3.25713C1.85821 1.83772 3.36253 0.879322 5.01496 0.59068C6.66359 0.302702 8.40172 0.691012 9.65471 1.88738Z"
                    fill={heartColor}
                    stroke="#531326"
                />
            )}
        </svg>
    );
});
