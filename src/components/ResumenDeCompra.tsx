import React from 'react';
import Divider from '../icons/Divider';
interface ResumenDeCompraProps {
  labelsLeft: string[];
  labelsRight: string[];
  footerTitles: string[];
}

const ResumenDeCompra: React.FC<ResumenDeCompraProps> = ({
  labelsLeft,
  labelsRight,
  footerTitles,
}) => {
  return (
    <div className="w-[361px] h-[226px] rounded-lg border border-gray-900 p-4 shadow-md bg-white flex flex-col justify-center items-center">
    <div className="flex justify-between w-full space-x-6 mt-4 px-6 pb-12 pt-2">
        <div className="space-y-2 w-1/2"> 
          {labelsLeft.slice(0, 3).map((label, index) => (
            <p key={index} className="text-label1 font-normal">{label}</p>
          ))}
        </div>
        <div className="space-y-2 text-right w-1/2"> 
          {labelsRight.slice(0, 3).map((label, index) => (
            <p key={index} className="text-label1 font-normal">{label}</p>
          ))}
        </div>
      </div>

        <Divider color="red" width="full"/>
      <div className="flex justify-between w-full px-6 mt-6 pt-0"> 
        <div className="w-1/2"> 
          <p className="font-semibold text-sm">{footerTitles[0]}</p>
        </div>
        <div className="w-1/2 text-right"> 
          <p className="font-semibold text-sm">{footerTitles[1]}</p>
        </div>
      </div>
    </div>
  );
};

export default ResumenDeCompra;
