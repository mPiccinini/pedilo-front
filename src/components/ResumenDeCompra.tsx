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
    <div className="w-[361px] h-[226px] rounded-lg border border-gray-300 p-4 shadow-md bg-white flex flex-col justify-between">
      <div className="flex justify-between px-4">
        {/* Labels de la izquierda */}
        <div className="space-y-2">
          {labelsLeft.slice(0, 3).map((label, index) => (
            <p key={index} className="text-label1">{label}</p>
          ))}
        </div>

        {/* Labels de la derecha */}
        <div className="space-y-2 text-right">
          {labelsRight.slice(0, 3).map((label, index) => (
            <p key={index} className="text-label1">{label}</p>
          ))}
        </div>
      </div>

      {/* Separador */}
      <div className="border-t border-black my-20 mx-[-16px] w-[90%] mx-auto"></div>

      {/* Footer titles */}
      <div className="flex justify-between px-0 mt-0 pb-0">
        <p className="font-semibold text-sm">{footerTitles[0]}</p>
        <p className="font-semibold text-sm">{footerTitles[1]}</p>
      </div>
    </div>
  );
};

export default ResumenDeCompra;
