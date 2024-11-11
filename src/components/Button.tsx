import {ButtonHTMLAttributes, forwardRef } from 'react';
import { cva, VariantProps } from "class-variance-authority";
import {cn} from "../utils/UtilFunctions.ts";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> ,VariantProps<typeof buttonVariants> {}

const buttonVariants = cva(
    "flex flex-row items-center justify-center rounded-2xl text-title3 gap-[12px] ",
    {
      variants: {
        variant: {
          default: "bg-primary-400 shadow-xl text-label1 text-white h-[40px] w-auto min-w-[251px]",
          pressed: "bg-primary-500 text-label1 text-white h-[40px] w-auto min-w-[251px] border-4 border-primary-600"
        }
      },
      defaultVariants: {
        variant: "default"
      }
    }
);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({className, variant, ...props }, ref) => {
    return (
        <button ref={ref} className={cn(buttonVariants({className, variant}))} {...props}></button>
    );
})

export default Button;