import {ButtonHTMLAttributes, forwardRef } from 'react';
import { cva, VariantProps } from "class-variance-authority";
import {cn} from "../utils/UtilFunctions.ts";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> ,VariantProps<typeof buttonVariants> {}

const buttonVariants = cva(
    "flex items-center justify-center space-x-2 font-semibold rounded-2xl px-6 py-4",
    {
      variants: {
        variant: {
          default: "bg-[#f9f6f2] text-black shadow-lg",
          outlined: "bg-transparent border border-black text-black"
        }
      },
      defaultVariants: {
        variant: "default"
      }
    }
);

const ExampleButton = forwardRef<HTMLButtonElement, ButtonProps>(({className, variant, ...props }, ref) => {
    return (
        <button ref={ref} className={cn(buttonVariants({className, variant}))} {...props}></button>
    );
})

export default ExampleButton;