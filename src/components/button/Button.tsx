import { ButtonHTMLAttributes, forwardRef, useState } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/UtilFunctions.ts';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

const buttonVariants = cva(
    "flex flex-row items-center justify-center rounded-3xl text-title3 gap-[12px]",
    {
        variants: {
            variant: {
                default: "bg-primary-400 shadow-xl text-label1 text-white h-[40px] w-auto min-w-[251px]",
                pressed: "bg-primary-500 text-label1 text-white h-[40px] w-auto min-w-[251px]",
                secondary: "bg-secondary-200 shadow-xl text-label1 text-white h-[50px] w-auto min-w-[200px]",
                secondaryPressed: "bg-secondary-300 text-label1 text-white h-[50px] w-auto min-w-[200px]",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant = "default", ...props }, ref) => {
    const [isPressed, setIsPressed] = useState(false);

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);

    const handleTouchStart = () => setIsPressed(true);
    const handleTouchEnd = () => setIsPressed(false);

    // Determine the correct variant to display based on `isPressed` and the selected variant
    const displayedVariant =
        isPressed && variant !== "secondaryPressed" ?
            (variant === "secondary" ? "secondaryPressed" : "pressed") :
            variant;

    return (
        <button
            ref={ref}
            className={cn(buttonVariants({ variant: displayedVariant, className }))}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp} // Reset when mouse leaves
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            {...props}
        >
            {props.children}
        </button>
    );
});

export default Button;