import {ButtonHTMLAttributes, forwardRef } from 'react';
import { cva, VariantProps } from "class-variance-authority";
import {cn} from "../utils/UtilFunctions.ts";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> ,VariantProps<typeof buttonVariants> {}

const buttonVariants = cva(
    "flex items-center justify-center space-x-2 rounded-2xl text-title3",
    {
      variants: {
        variant: {
          branch: "bg-primary-50 shadow-xl text-label1 w-[190px] h-[89px]",
          default: "bg-primary-400 text-label1 text-white h-[40px] w-[251px]"
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