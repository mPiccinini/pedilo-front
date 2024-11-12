import React, { useState } from 'react';

interface ItemQuantitySelectorProps {
  initialGrams: number;
  pricePerGram: number; // Price for each gram
  stepOfGrams: number; // Step for each increment/decrement
}

export default function ItemQuantitySelector({
  initialGrams,
  pricePerGram,
  stepOfGrams,
}: ItemQuantitySelectorProps) {
  const [totalGrams, setTotalGrams] = useState(initialGrams);
  const [totalPrice, setTotalPrice] = useState(initialGrams * pricePerGram);

  const handleAdd = () => {
    setTotalGrams((prevGrams) => prevGrams + stepOfGrams);
    setTotalPrice((prevPrice) => prevPrice + stepOfGrams * pricePerGram);
  };

  const handleSubtract = () => {
    if (totalGrams > 0) {
      setTotalGrams((prevGrams) => Math.max(0, prevGrams - stepOfGrams));
      setTotalPrice((prevPrice) => Math.max(0, prevPrice - stepOfGrams * pricePerGram));
    }
  };

  return (
    <div className="w-[165px] h-[80px] p-4 bg-primary-50 rounded-[12px] border border-secondary-500 flex flex-col items-center justify-center space-y-2">
      <div className="flex items-center justify-between w-full">
        <button
          onClick={handleSubtract}
          className="text-2xl font-bold text-black"
          disabled={totalGrams <= 0}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 13V11H18V13H6Z" fill="#1D1B20"/>
          </svg>
        </button>
        <span className="font-roboto text-title2 font-bold text-black">{totalGrams}g</span>
        <button onClick={handleAdd} className="text-2xl font-bold text-black">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.42857 8.57143H0V6.42857H6.42857V0H8.57143V6.42857H15V8.57143H8.57143V15H6.42857V8.57143Z" fill="#1D1B20"/>
          </svg>
        </button>
      </div>
      <div className="w-[165px] border-t border-secondary-500"></div>
      <div className="text-label1 font-roboto flex justify-between w-full mt-1">
        <span>Total:</span>
        <span>${totalPrice.toLocaleString()}</span>
      </div>
    </div>
  );
}
