import React from 'react';
import NavBarItem from '@/components/navBar/NavBarItem';

import HomeIcon from "@/icons/HomeIcon";
import RecipeIcon from "@/icons/RecipeIcon";
import BasketIcon from "@/icons/BasketIcon";
import DollarIcon from "@/icons/DollarIcon";
import BagIcon from "@/icons/BagIcon";

interface NavBarProps {
    variant: 'variant1' | 'variant2' | 'variant3' | 'variant4' | 'variant5';
}

const NavBar: React.FC<NavBarProps> = ({ variant }) => {
    const defaultColor = 'black';
    const highlightColor = 'text-orange-500';

    return (
        <nav className={`flex justify-around items-center w-[409px] h-[90px] bg-primary-50`}>
            <NavBarItem
                icon={<HomeIcon iconColor={variant === 'variant1' ? 'orange' : 'black'} size="24" />}
                label="Inicio"
                iconColor={variant === 'variant1' ? highlightColor : defaultColor}
                labelColor={variant === 'variant1' ? highlightColor : defaultColor}
            />
            <NavBarItem
                icon={<RecipeIcon iconColor={variant === 'variant2' ? 'orange' : 'black'} size="24" />}
                label="Recetas"
                iconColor={variant === 'variant2' ? highlightColor : defaultColor}
                labelColor={variant === 'variant2' ? highlightColor : defaultColor}
            />
            <NavBarItem
                icon={<BasketIcon iconColor={variant === 'variant3' ? 'orange' : 'black'} size="24" />}
                label="Ingredientes"
                iconColor={variant === 'variant3' ? highlightColor : defaultColor}
                labelColor={variant === 'variant3' ? highlightColor : defaultColor}
            />
            <NavBarItem
                icon={<DollarIcon iconColor={variant === 'variant4' ? 'orange' : 'black'} size="24" />}
                label="Ofertas"
                iconColor={variant === 'variant4' ? highlightColor : defaultColor}
                labelColor={variant === 'variant4' ? highlightColor : defaultColor}
            />
            <NavBarItem
                icon={<BagIcon iconColor={variant === 'variant5' ? 'orange' : 'black'} size="24" />}
                label="Compras"
                iconColor={variant === 'variant5' ? highlightColor : defaultColor}
                labelColor={variant === 'variant5' ? highlightColor : defaultColor}
            />
        </nav>
    );
};

export default NavBar;