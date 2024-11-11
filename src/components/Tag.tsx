import React from 'react';

interface TagProps {
  text: string;
  variant?: 'variant1' | 'variant2';
}

const Tag: React.FC<TagProps> = ({ text, variant = 'variant1' }) => {
  const baseClasses = 'rounded-full inline-flex items-center justify-center text-xs px-2 py-1';
  const variantClasses = variant === 'variant2'
    ? 'border border-tertiary-500 rounded-[9px] bg-tertiary-50 font-roboto font-bold text-tertiary-950'
    : 'bg-[#EBFCFF] text-black';

  return (
    <div className={`${baseClasses} ${variantClasses}`}>
      <span className="whitespace-nowrap">{text}</span>
    </div>
  );
};

export default Tag;