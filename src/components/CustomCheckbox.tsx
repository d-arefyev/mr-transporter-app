import React from "react";

interface CustomCheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  checkedColor?: string;
  uncheckedBorderColor?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
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
        type="checkbox"
        checked={checked}
        onChange={onChange} 
        className="hidden"
        {...props}
      />
      <div
        className={`flex items-center justify-center border-[1px] rounded-[4px]
          ${uncheckedBorderColor} ${className} 
          w-5 h-5 mr-2 flex-shrink-0 transition-colors duration-200
          ${checked ? checkedColor : "bg-transparent"}`}
      >
        {checked && (
          <svg
            width="14"
            height="10"
            viewBox="0 0 14 10"
            fill="none"
            className="stroke-color-light"
          >
            <path
              d="M0.99998 4.42857L5.32001 9L13 1"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      {label && <span className="text-color-gray">{label}</span>}
    </label>
  );
};

export default CustomCheckbox;
