import { ButtonHTMLAttributes, forwardRef, useState } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../utils/UtilFunctions.ts';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

const buttonVariants = cva(
    "flex flex-row items-center justify-center rounded-2xl text-title3 gap-[12px]",
    {
        variants: {
            variant: {
                default: "bg-primary-50 shadow-xl text-label2 w-auto min-w-[163px] h-[71px] p-[16px]",
                pressed: "bg-tertiary-50 text-label2 w-auto min-w-[163px] h-[71px] p-[16px]",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

const BranchButton = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, ...props }, ref) => {
    const [isPressed, setIsPressed] = useState(false);

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);

    const handleTouchStart = () => setIsPressed(true);
    const handleTouchEnd = () => setIsPressed(false);

    return (
        <button
            ref={ref}
            className={cn(buttonVariants({ variant: !isPressed && variant === 'default' ? 'default' : 'pressed', className }))}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp} // Ensures it resets when the mouse leaves the button
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            {...props}
        />
    );
});

export default BranchButton;