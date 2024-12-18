// FilterChip.tsx
import { ButtonHTMLAttributes, forwardRef, useState } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils/UtilFunctions.ts";
import CheckIcon from "@/icons/CheckIcon.tsx";

interface FilterChipProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof chipVariants> {
    label: string;
}

const chipVariants = cva(
    "flex items-center justify-center rounded-2xl text-label1 gap-2 px-4 py-2 cursor-pointer",
    {
        variants: {
            variant: {
                default: "bg-primary-50 font-roboto text-gray-900 shadow-md", // Fondo y texto para default
                selected: "bg-primary-100 text-gray-900 shadow-lg", // Fondo y texto para selected
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

const FilterChip = forwardRef<HTMLButtonElement, FilterChipProps>(
    ({ className, label, variant: initialVariant = "default", ...props }, ref) => {
        const [variant, setVariant] = useState(initialVariant);

        const handleClick = () => {
            setVariant((prevVariant) => (prevVariant === "default" ? "selected" : "default"));
        };

        return (
            <button
                ref={ref}
                className={cn(chipVariants({ variant }), className)}
                onClick={handleClick}
                {...props}
            >
                {variant === "selected" && <CheckIcon />}
                {label}
            </button>
        );
    }
);

export default FilterChip;
