import React from 'react';

interface InputProps {
  label: string;
  placeholder: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  type = 'text',
  value = '',
  onChange,
  required = false,
  className = '',
}) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm text-color-gray">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`h-[46px] border border-color-gray rounded px-4 py-2.5 placeholder-color-light-gray ${className}`}
        required={required}
      />
    </div>
  );
};

export default Input;
