import React from "react";

interface CustomRadioButtonProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  checkedColor?: string;
  uncheckedBorderColor?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomRadioButton: React.FC<CustomRadioButtonProps> = ({
  label,
  checkedColor = "bg-color-accent",
  uncheckedBorderColor = "border-color-gray",
  className = "",
  checked = false,
  onChange,
  ...props
}) => {
  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="radio"
        checked={checked}
        onChange={onChange}
        className="hidden"
        {...props}
      />
      <div
        className={`flex items-center justify-center border-[1px] rounded-full
          ${uncheckedBorderColor} ${className} 
          w-4 h-4 mr-2 flex-shrink-0 transition-colors duration-200
          ${checked ? checkedColor : "bg-transparent"}`}
      >
        {checked && (
          <div
            className="w-2.5 h-2.5 rounded-full bg-color-accent"
          />
        )}
      </div>
      {label && <span className="text-color-dark">{label}</span>}
    </label>
  );
};

export default CustomRadioButton;
