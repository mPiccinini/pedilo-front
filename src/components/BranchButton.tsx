import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from "../utils/UtilFunctions.ts";
import BasketIcon from '../icons/BasketIcon';
import RecipeIcon from '../icons/RecipeIcon';

interface BranchButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: 'basket' | 'book'; 
}

const BranchButton = forwardRef<HTMLButtonElement, BranchButtonProps>(({ label, icon = 'basket', className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn("w-[190px] h-[89px] bg-[#fff7ef] rounded-2xl shadow flex flex-col justify-center items-center", className)}
      {...props}
    >
      <div className="flex items-center gap-3">
        {icon === 'basket' && <BasketIcon variant="variant1" iconColor="defaultColor" size="defaultSize" />}
        {icon === 'book' && <RecipeIcon variant="variant1" iconColor="defaultColor" size="defaultSize" />}
        <span className="text-black text-sm font-medium font-['Roboto']">
          {label}
        </span>
      </div>
    </button>
  );
});

export default BranchButton;
