import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from "../utils/UtilFunctions.ts";
import BasketIcon from './BasketIcon';
import RecipeIcon from './RecipeIcon';

interface BranchButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: 'basket' | 'book'; // 'basket' para Ingredientes, 'book' para Recetas
}

const BranchButton = forwardRef<HTMLButtonElement, BranchButtonProps>(({ label, icon = 'basket', className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn("w-[190px] h-[89px] bg-[#fff7ef] rounded-2xl shadow flex flex-col justify-center items-center", className)}
      {...props}
    >
      <div className="flex items-center gap-3">
        {icon === 'basket' && <BasketIcon color="#000" size={24} />}
        {icon === 'book' && <RecipeIcon color="#000" size={24} />}
        <span className="text-black text-sm font-medium font-['Roboto']">
          {label}
        </span>
      </div>
    </button>
  );
});

export default BranchButton;
