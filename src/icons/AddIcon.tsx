import React, { forwardRef } from 'react';
import { IconInterface } from './IconInterface'; 

export const AddIcon = forwardRef<SVGSVGElement, IconInterface>(({ iconColor = "currentColor", size = "24px" }, ref) => {
    return (
        <svg
            ref={ref}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10.2857 13.7143H0V10.2857H10.2857V0H13.7143V10.2857H24V13.7143H13.7143V24H10.2857V13.7143Z"
                fill={iconColor} 
            />
        </svg>
    );
});
