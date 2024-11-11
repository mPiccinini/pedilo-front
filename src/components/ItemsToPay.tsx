import React from 'react';
import CancelIcon from '@/icons/CancelIcon';

interface ItemsToPayProps {
  imageUrl: string;
  text: string;
}

const ItemsToPay: React.FC<ItemsToPayProps> = ({ imageUrl, text }) => {
  return (
    <div className="w-[294px] h-[76px] flex items-center relative">
      <div className="w-[77px] h-[56px] rounded-[12px] overflow-hidden flex-shrink-0 ml-2">
        <img 
          src={imageUrl} 
          alt="Item" 
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex-grow ml-4 font-roboto text-body3 text-black">
        {text}
      </div>

      <div className="flex-none mr-4">
        <CancelIcon size={16} color="#1E1E1E" />
      </div>
      <div className="absolute bottom-red-10 left-[20px] right-[10px] h-[1px] bg-red-800" />
    </div>
  );
};

export default ItemsToPay;
