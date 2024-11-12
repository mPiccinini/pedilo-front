import {forwardRef, useState} from 'react';
import { IconInterface } from './IconInterface';

export const DollarIcon = forwardRef<SVGSVGElement, IconInterface & { variant?: 'variant1' | 'variant2' }>(({ iconColor = "currentColor", size = "24px", variant = "variant1" }, ref) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    return (
        <svg
            ref={ref}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform transform ${isClicked ? "scale-110" : ""} cursor-pointer`}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            {variant === "variant1" ? (
                <path
                    d="M12 1V23M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6"
                    stroke={iconColor}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            ) : (
                //es variant2
                <path
                    d="M12 1V23M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6"
                    stroke={iconColor}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            )}
        </svg>
    );
});

export default DollarIcon;