import React from 'react';
import ClockIcon from '@/icons/ClockIcon';
import CancelIcon from '@/icons/CancelIcon';

interface ListItemProps {
  text: string;
}

const ListItem: React.FC<ListItemProps> = ({ text }) => {
  return (
    <div className="w-[360px] h-[63px] flex items-center relative">
      <div className="flex-none ml-4">
        <ClockIcon iconColor="currentColor" size="24px" />
      </div>
      
      <div className="flex-grow ml-4 font-roboto text-body1 text-black">
        {text}
      </div>
      
      <div className="flex-none mr-4">
        <CancelIcon size={16} color="#1E1E1E" />
      </div>
      
      <div className="absolute bottom-0 left-[20px] right-[20px] h-[1px] bg-red" />
    </div>
  );
};

export default ListItem;
