import {forwardRef, useState} from 'react';
import { IconInterface } from './IconInterface';

export const ArrowBackIcon = forwardRef<SVGSVGElement, IconInterface>(({ iconColor = "currentColor", size = "24px"}, ref) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    return (
        <svg
            ref={ref}
            width={size}
            height={size}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform transform ${isClicked ? "scale-110" : ""} cursor-pointer`} // Scale on click
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            <path
                d="M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z"
                fill={iconColor} 
            />
        </svg>
    );
});

export default ArrowBackIcon;
