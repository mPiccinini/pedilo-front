import React from 'react';

interface TagProps {
  text: string;
}

const Tag: React.FC<TagProps> = ({ text }) => {
  return (
    <div className="bg-[#EBFCFF] rounded-full inline-flex items-center justify-center text-black text-xs px-2 py-1">
      <span className="whitespace-nowrap">{text}</span>
    </div>
  );
};

export default Tag;
