import React from 'react';
import {IconInterface} from "@/icons/IconInterface.ts";

interface NavBarItemProps {
    icon: React.ReactElement<IconInterface>;
    label: string;
    iconColor: string;
    labelColor: string;
}

const NavBarItem: React.FC<NavBarItemProps> = ({ icon, label, iconColor, labelColor }) => {
    return (
        <div className="flex flex-col items-center justify-center w-18 h-20">
            <span className={`icon ${iconColor}`}>{icon}</span>
            <span className={`label ${labelColor} text-xs`}>{label}</span>
        </div>
    );
};

export default NavBarItem;