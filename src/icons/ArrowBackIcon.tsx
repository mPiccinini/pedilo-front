import { forwardRef } from 'react';
import { IconInterface } from './IconInterface';

export const ArrowBackIcon = forwardRef<SVGSVGElement, IconInterface>(({ iconColor = "currentColor", size = "24px" }, ref) => {
    return (
        <svg
            ref={ref}
            width={size}
            height={size}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z"
                fill={iconColor} 
            />
        </svg>
    );
});

export default ArrowBackIcon;
