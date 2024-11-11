import  { forwardRef } from 'react';
import { IconInterface } from './IconInterface';

export const ClockIcon = forwardRef<SVGSVGElement, IconInterface>(({ iconColor = "currentColor", size = "24px" }, ref) => {
    return (
        <svg
            ref={ref}
            width={size}
            height={size}
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12.4998 6.5V12.5L8.33317 14.5M2.08317 12.5C2.08317 18.0228 6.74687 22.5 12.4998 22.5C18.2528 22.5 22.9165 18.0228 22.9165 12.5C22.9165 6.97715 18.2528 2.5 12.4998 2.5C6.74687 2.5 2.08317 6.97715 2.08317 12.5Z"
                stroke={iconColor}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
});
