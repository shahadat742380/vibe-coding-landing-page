// import core package
import React, { ButtonHTMLAttributes, FC } from "react";

// import cn
import { cn } from "@/lib/utils";

// Define variants
type ButtonVariant = "primary" | "secondary";

// Define custom props separately
interface CustomButtonProps {
  content: React.ReactNode;
  className?: string;
  isActive?: boolean;
  variant?: ButtonVariant;
}

// combining custom props with the standard button attributes
type ButtonProps = CustomButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

const BtnPrimary: FC<ButtonProps> = ({
  content,
  className,
  variant = "primary",
  ...rest // Capture the rest of the button native props
}) => {
  return (
    <button
      {...rest} // Spread the rest of the native button props here
      className={cn(
        "py-3 px-6 md:py-[14px] hover:opacity-90 rounded-md text-base duration-500 font-semibold",
        variant === "primary" && "bg-primary text-white",
        variant === "secondary" &&
          "border border-primary text-primary bg-transparent",
        className
      )}
    >
      {content}
    </button>
  );
};

export default BtnPrimary;
