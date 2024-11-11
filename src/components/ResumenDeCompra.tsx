import React from 'react';

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
    <div className="w-[361px] h-[226px] rounded-lg border border-gray-300 p-4 shadow-md bg-white flex flex-col">
      <div className="flex justify-between w-full space-x-6 mt-4 px-6">
        <div className="space-y-0">
          {labelsLeft.slice(0, 3).map((label, index) => (
            <p key={index} className="text-label1">{label}</p>
          ))}
        </div>
        <div className="space-y-0 text-right">
          {labelsRight.slice(0, 3).map((label, index) => (
            <p key={index} className="text-label1">{label}</p>
          ))}
        </div>
      </div>

      
      <div className="border-t-2 border-black w-[90%] mx-auto my-2 rounded-full"></div> 

      <div className="flex justify-between w-full px-6 pt-0"> 
        <p className="font-semibold text-sm">{footerTitles[0]}</p>
        <p className="font-semibold text-sm">{footerTitles[1]}</p>
      </div>
    </div>
  );
};

export default ResumenDeCompra;
