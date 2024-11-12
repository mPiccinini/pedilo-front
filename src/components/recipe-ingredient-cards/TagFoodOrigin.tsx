import React from 'react';

export interface TagFoodOriginProps {
  text: string;
  imageSrc?: string;
}

export const TagFoodOrigin: React.FC<TagFoodOriginProps> = ({ text, imageSrc }) => {
  return (
      <div className="flex items-center w-auto h-[48px]">
        <div className="flex items-center justify-between w-auto h-full bg-primary-50 rounded-lg shadow-lg overflow-hidden">
          <span className="font-roboto text-title2 ml-2 p-4">{text}</span>
            {imageSrc && (
                <img
                  src={imageSrc}
                  alt="Food origin"
                  className="w-[80px] min-w-[80px] h-full object-cover rounded-l-none"
                />
            )}
        </div>
      </div>
  );
};

export default TagFoodOrigin;