import { ImgHTMLAttributes, forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/UtilFunctions.ts';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement>, VariantProps<typeof imageVariants> {
    src: string; // Required image source
    alt: string; // Required alt text for accessibility
}

const imageVariants = cva(
    "m-0 p-0", // Default image styling
    {
        variants: {
            size: {
                small: "w-16 h-16", // Small size
                medium: "w-32 h-32", // Medium size
                large: "w-max h-max", // Large size
            },
            variant: {
                default: "",
                shadow: "shadow-lg", // Adds a shadow effect
                rounded: "rounded-full", // Circular image
                bordered: "border-2 border-gray-300", // Border around the image
            },
        },
        defaultVariants: {
            size: "medium",
            variant: "default",
        },
    }
);

const   ImageComponent = forwardRef<HTMLImageElement, ImageProps>(({ className, size, variant, src, alt, ...props }, ref) => {
    return (
        <img
            ref={ref}
            src={src}
            alt={alt}
            className={cn(imageVariants({ className, size, variant }))}
            {...props}
        />
    );
});

export default ImageComponent;