// FilterChip.tsx
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../utils/UtilFunctions.ts";

interface FilterChipProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof chipVariants> {
  label: string;
}

const chipVariants = cva(
  "flex items-center justify-center rounded-2xl text-label1 gap-2 px-4 py-2 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-primary-50 font-roboto text-gray-900 shadow-md", // Fondo y texto para default
        selected: "bg-primary-100  text-gray-900 shadow-lg", // Fondo y texto para selected
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const FilterChip = forwardRef<HTMLButtonElement, FilterChipProps>(
  ({ className, label, variant = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(chipVariants({ variant }), className)}
        {...props}
      >
        {variant === "selected" && (
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth="4" 
            className="w-4 h-4 mr-1"
          >
            <path strokeLinecap="square" strokeLinejoin="miter" d="M5 13l4 4L19 7" />
          </svg>
        )}
        {label}
      </button>
    );
  }
);

export default FilterChip;
