import React from 'react';
import { TrashIcon } from '@/icons/TrashIcon';
import { EditIcon } from '@/icons/EditIcon';
import { CircularAddIcon } from '@/icons/CircularAddIcon';

interface PersonalInfoCardProps {
  variant: 'bank' | 'address' | 'add';
  bankName?: string;
  lastDigits?: string;
  expiryDate?: string;
  street?: string;
  postalCode?: string;
}

export default function PersonalInfoCard({
  variant,
  bankName,
  lastDigits,
  expiryDate,
  street,
  postalCode,
}: PersonalInfoCardProps) {
  return (
    <div className="w-[300px] h-[40px] flex items-center bg-primary-50 rounded-[12px] shadow-custom-light px-3">
       {variant === 'bank' && (
        <>
            <div className="flex items-center flex-grow overflow-hidden">
            <span className="font-roboto text-label2 font-bold mr-3 truncate max-w-[45px]">{bankName}</span>
            <span className="font-roboto text-label3 mr-2">Termina en {lastDigits}</span>
            <span className="font-roboto text-label3">Vence: {expiryDate}</span>
            </div>
            <div className="border-l border-[#D1D1D1] h-full ml-2 pl-2 flex items-center">
            <TrashIcon />
            </div>
        </>
        )}

      {variant === 'address' && (
        <>
          <div className="flex items-center flex-grow">
            <span className="font-roboto text-label2 font-bold">{street}</span>
            <span className="font-roboto text-label3 ml-auto">CP: {postalCode}</span>
          </div>
          <div className="border-l border-[#D1D1D1] h-full ml-2 pl-2 flex items-center space-x-2">
            <EditIcon />
            <TrashIcon />
          </div>
        </>
      )}

      {variant === 'add' && (
        <div className="w-full flex items-center justify-center">
          <CircularAddIcon iconColor="#000000" size="24px" />
        </div>
      )}
    </div>
  );
}
