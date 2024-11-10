// HomeIcon.tsx
import React from 'react';
import { IconInterface } from './IconInterface';

export const HomeIcon: React.FC<IconInterface> = ({ iconColor, size }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={iconColor}
            width={size}
            height={size}
        >
            <path d="M12 3l10 9-1 1-3-2V19h-6V12H9v7H3V11l-1-1 10-9z" />
        </svg>
    );
};

export default HomeIcon;
