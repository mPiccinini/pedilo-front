import React from 'react';
import ProfileIcon from '@/icons/ProfileIcon';
import CartIcon from '@/icons/CartIcon';
import ArrowBackIcon from '@/icons/ArrowBackIcon';

interface TopBarProps {
  backgroundColor: string;
  title: string;
  variant: 'variant1' | 'variant2' | 'variant3';
}

const TopBarComponent: React.FC<TopBarProps> = ({ backgroundColor, title, variant }) => {
  return (
    <div className={`flex justify-between items-center w-[412px] h-[62px] ${backgroundColor} px-4`}>
      {variant === 'variant1' && <ProfileIcon iconColor="black" size="24" />}
      {variant !== 'variant1' && <ArrowBackIcon iconColor="black" size="24" />}
      <span className={`text-center text-lg font-semibold ${variant === 'variant2' ? 'flex-grow' : ''}`}>{title}</span>
      {(variant === 'variant1' || variant === 'variant3') && <CartIcon/>}
    </div>
  );
};

export default TopBarComponent;