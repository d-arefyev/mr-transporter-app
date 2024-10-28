import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  height?: '52' | '42';
}

const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  iconPosition = 'left',
  height = '52',
  className,
  disabled,
  ...props
}) => {
  const heightClass = height === '42' ? 'h-[42px]' : 'h-[52px]';

  return (
    <button
      className={`flex items-center justify-center font-medium whitespace-nowrap
        w-full ${heightClass} px-4 text-color-light bg-color-accent rounded-lg
        transition-all hover:bg-color-light hover:text-color-accent
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      disabled={disabled}
      {...props}
    >
      {iconPosition === 'left' && icon && <span className="w-5 h-5 mr-2 fill-current">{icon}</span>}
      {label}
      {iconPosition === 'right' && icon && <span className="w-5 h-5 ml-2 fill-current">{icon}</span>}
    </button>
  );
};

export default Button;
