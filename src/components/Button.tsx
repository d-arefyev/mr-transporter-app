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
        w-full ${heightClass} px-[12px] text-color-light bg-color-accent rounded-[8px]
        transition-all hover:bg-color-light hover:text-color-accent
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      disabled={disabled}
      {...props}
    >
      {iconPosition === 'left' && icon && <span className="w-[20px] h-[20px] fill-current">{icon}</span>}
      {label}
      {iconPosition === 'right' && icon && <span className="w-[20px] h-[20px] fill-current">{icon}</span>}
    </button>
  );
};

export default Button;
