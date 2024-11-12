import React from 'react';
import CreditCardIcon from '@/icons/CreditCardIcon';
import DiscountIcon from '@/icons/DiscountIcon';
import LocationIcon from '@/icons/LocationIcon';
import { ClockIcon } from '@/icons/ClockIcon';

type InfoCardProps = {
  variant: "variant1" | "variant2";
  labelTopLeft?: string;
  labelBottomLeft?: string;
  labelTopRight?: string;
  labelBottomRight?: string;
};

const InfoCard: React.FC<InfoCardProps> = ({
  variant,
  labelTopLeft = "Label superior izquierda",
  labelBottomLeft = "Label inferior izquierda",
  labelTopRight = "Label superior derecha",
  labelBottomRight = "Label inferior derecha",
}) => {
  return (
    <div className="w-[360px] h-[100px] relative">
      <div className="w-[360px] h-[100px] absolute rounded-[15px] border border-black" />

      <div className="w-[327px] h-[60px] absolute top-[20px] left-[17px]">
        {variant === 'variant1' ? (
          <>
            <div className="flex items-center absolute left-0 top-0">
              <CreditCardIcon size={24} color="#1d1b20" />
              <span className="ml-2 text-sm font-['Roboto'] text-[#1d1b20]">{labelTopLeft}</span>
            </div>

            <div className="flex items-center absolute left-0 top-[33px]">
              <DiscountIcon size={24} color="#1d1b20" />
              <span className="ml-2 text-sm font-['Roboto'] text-[#1d1b20]">{labelBottomLeft}</span>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center absolute left-0 top-0">
              <LocationIcon size={18} color="#1d1b20" />
              <span className="ml-2 text-sm font-['Roboto'] text-[#1d1b20]">{labelTopLeft}</span>
            </div>

            <div className="flex items-center absolute left-0 top-[33px]">
              <ClockIcon size="24" iconColor="#1d1b20" />
              <span className="ml-2 text-sm font-['Roboto'] text-[#1d1b20]">{labelBottomLeft}</span>
            </div>
          </>
        )}

        <div
          className={`absolute top-0 right-0 text-sm font-['Roboto'] text-[#1d1b20] text-right ${
            variant === 'variant2' && 'hover:underline'
          }`}
        >
          {labelTopRight}
        </div>

        {labelBottomRight && (
          <div className="absolute top-[33px] right-0 text-sm font-['Roboto'] text-[#1d1b20] text-right">
            {labelBottomRight}
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoCard;
