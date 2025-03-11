
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link" | "luxury" | "gold";
  size?: "default" | "sm" | "lg" | "icon";
}

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          
          // Variants
          variant === "primary" && "bg-primary text-primary-foreground hover:bg-primary/90",
          variant === "secondary" && "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          variant === "outline" && "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          variant === "ghost" && "hover:bg-accent hover:text-accent-foreground",
          variant === "link" && "text-primary underline-offset-4 hover:underline",
          variant === "luxury" && "bg-luxury-900 text-white hover:bg-luxury-800 border border-luxury-700 shadow-md",
          variant === "gold" && "bg-gold-400 text-luxury-900 hover:bg-gold-500 border border-gold-300 shadow-md",
          
          // Sizes
          size === "default" && "h-10 px-6 py-2",
          size === "sm" && "h-9 px-4 text-sm",
          size === "lg" && "h-12 px-8 text-lg",
          size === "icon" && "h-10 w-10",
          
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

CustomButton.displayName = "CustomButton";

export { CustomButton };
