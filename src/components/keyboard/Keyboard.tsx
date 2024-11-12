import { FC } from "react";
import { ReactNode } from "react";
import { ArrowBackIcon } from "../../icons/ArrowBackIcon";

interface KeyProps {
  label: ReactNode;
  className?: string;
}

const Key: FC<KeyProps> = ({ label, className }) => (
  <div className={`w-[34px] h-[46px] flex justify-center items-center bg-[#f7f2fa] rounded-md ${className}`}>
    <span className="text-center text-[#1d1b20] text-[21px] font-normal font-['Roboto'] leading-none">
      {label}
    </span>
  </div>
);

const SpecialKey: FC<KeyProps> = ({ label, className }) => (
  <div className={`w-[55px] h-[46px] flex justify-center items-center rounded-full ${className}`}>
    <span className="text-[#1d192b] text-sm font-medium font-['Roboto'] leading-none">
      {label}
    </span>
  </div>
);

const Keyboard: FC = () => {
  return (
    <div className="w-[430px] h-[300px] bg-[#fff7ef] rounded-b-xl flex flex-col p-2 gap-2 relative">
      {/* Top row with icons */}
      <div className="w-full h-11 flex justify-between items-center px-4">
        <div className="w-8 h-8 bg-[#ffdbb2] flex justify-center items-center rounded-md">
          <ArrowBackIcon iconColor="#000" size="14" />
        </div>
        <div className="flex gap-4">
          <div className="w-6 h-6 bg-gray-200 rounded-full" />
          <div className="w-6 h-6 bg-gray-200 rounded-full" />
          <div className="w-6 h-6 bg-gray-200 rounded-full" />
          <div className="w-6 h-6 bg-gray-200 rounded-full" />
        </div>
        <div className="w-6 h-6 bg-gray-200 rounded-full" />
      </div>

      {/* Keyboard rows */}
      <div className="flex flex-col gap-2 items-center">
        {/* First row */}
        <div className="flex gap-1">
          {"qwertyuiop".split("").map((key) => (
            <Key key={key} label={key} />
          ))}
        </div>

        {/* Second row */}
        <div className="flex gap-1 px-4">
          {"asdfghjkl".split("").map((key) => (
            <Key key={key} label={key} />
          ))}
        </div>

        {/* Third row */}
        <div className="flex gap-2 px-8">
          {"zxcvbnm".split("").map((key) => (
            <Key key={key} label={key} />
          ))}
          <SpecialKey label="⌫" className=" ml-2 px-8 bg-[#e6e0e9] text-[14px] font-medium font-['Roboto'] rounded-md" />
        </div>

        {/* Bottom row */}
        <div className="flex gap-1 items-center justify-between w-full px-2">
          <SpecialKey label="?123" className="bg-[#ffdbb2] text-[14px] font-medium font-['Roboto'] rounded-full" />
          <Key label="," className="bg-[#e6e0e9] text-[14px] font-medium font-['Roboto'] rounded-md" />
          <SpecialKey label="" className="bg-[#e6e0e9] w-[301px] rounded-md" />
          <Key label="." className="bg-[#e6e0e9] text-[14px] font-medium font-['Roboto'] rounded-md" />
          <SpecialKey label={<span className="text-[24px]">↵</span>} className="bg-primary-500 font-medium font-['Roboto'] rounded-4" />
          </div>
      </div>

      {/* Bottom bar */}
      <div className="w-full flex justify-center items-center mt-1">
        <div className="w-[108px] h-1 bg-[#1d1b20] rounded-xl"></div>
      </div>
    </div>
  );
};

export default Keyboard;
