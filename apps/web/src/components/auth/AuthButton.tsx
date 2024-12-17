import React from 'react';

interface AuthButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  type?: 'button' | 'submit';
}

export const AuthButton: React.FC<AuthButtonProps> = ({
  onClick,
  children,
  variant = 'primary',
  fullWidth = false,
  type = 'button'
}) => {
  const baseStyles = "rounded-lg py-2.5 font-medium transition-all duration-300 relative overflow-hidden";
  const variantStyles = {
    primary: "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 border border-transparent",
    secondary: "bg-transparent text-gray-300 border border-gray-600 hover:border-purple-500 hover:text-purple-500 animate-border-glow"
  };
  const widthStyles = fullWidth ? "w-full" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${widthStyles} group`}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};