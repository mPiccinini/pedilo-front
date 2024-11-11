import {ButtonHTMLAttributes, forwardRef } from 'react';
import { cva, VariantProps } from "class-variance-authority";
import {cn} from "../utils/UtilFunctions.ts";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> ,VariantProps<typeof buttonVariants> {}

const buttonVariants = cva(
    "flex flex-row items-center justify-center rounded-2xl text-title3 gap-[12px] ",
    {
        variants: {
            variant: {
                default: "bg-primary-50 shadow-xl text-label2 w-auto min-w-[163px] h-[71px] p-[16px]",
                pressed: "bg-tertiary-50 text-label2 w-auto min-w-[163px] h-[71px] p-[16px]"
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