// FilterChip.tsx
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../utils/UtilFunctions.ts";
import CheckIcon from "../icons/CheckIcon"; // Asegúrate de ajustar la ruta si es necesario

interface FilterChipProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof chipVariants> {
  label: string;
}

const chipVariants = cva(
  "flex items-center justify-center rounded-2xl text-label1 gap-2 px-4 py-2 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-primary-50 font-roboto text-gray-900 shadow-md", // Fondo y texto para default
        selected: "bg-primary-100 font-roboto text-gray-900 shadow-lg", // Fondo y texto para selected
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
          <CheckIcon /> // Usa tu componente de icono personalizado
        )}
        {label}
      </button>
    );
  }
);

export default FilterChip;
