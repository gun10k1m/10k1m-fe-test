import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({
  size = "md",
  className,
  children,
  ...rest
}) => {
  const baseClasses =
    "bg-blue-500 text-white rounded-lg focus:outline-none hover:bg-blue-600 transition-colors disabled:bg-gray-600";
  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${
    className || ""
  }`;

  return (
    <button className={combinedClasses} {...rest}>
      {children}
    </button>
  );
};

export default Button;
