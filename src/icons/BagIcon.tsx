import React, { forwardRef } from 'react';
import { IconInterface } from './IconInterface';

export const BagIcon = forwardRef<SVGSVGElement, IconInterface & { variant?: 'variant1' | 'variant2' }>(({ iconColor = "currentColor", size = "24px", variant = "variant1" }, ref) => {
    return (
        <svg
            ref={ref}
            width={size}
            height={size}
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {variant === "variant1" ? (
                <path
                    d="M1 5.8L5 1H21L25 5.8M1 5.8V22.6C1 23.2365 1.28095 23.847 1.78105 24.2971C2.28115 24.7471 2.95942 25 3.66667 25H22.3333C23.0406 25 23.7189 24.7471 24.219 24.2971C24.719 23.847 25 23.2365 25 22.6V5.8M1 5.8H25M18.3333 10.6C18.3333 11.873 17.7714 13.0939 16.7712 13.9941C15.771 14.8943 14.4145 15.4 13 15.4C11.5855 15.4 10.229 14.8943 9.22876 13.9941C8.22857 13.0939 7.66667 11.873 7.66667 10.6"
                    stroke={iconColor}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            ) : (
                // es la variant2
                <path
                    d="M1 5.8L5 1H21L25 5.8M1 5.8V22.6C1 23.2365 1.28095 23.847 1.78105 24.2971C2.28115 24.7471 2.95942 25 3.66667 25H22.3333C23.0406 25 23.7189 24.7471 24.219 24.2971C24.719 23.847 25 23.2365 25 22.6V5.8M1 5.8H25M18.3333 10.6C18.3333 11.873 17.7714 13.0939 16.7712 13.9941C15.771 14.8943 14.4145 15.4 13 15.4C11.5855 15.4 10.229 14.8943 9.22876 13.9941C8.22857 13.0939 7.66667 11.873 7.66667 10.6"
                    stroke={iconColor}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            )}
        </svg>
    );
});
