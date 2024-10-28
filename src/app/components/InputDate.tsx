import React from "react";

interface InputDateProps {
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
}

const InputDate: React.FC<InputDateProps> = ({
  label,
  value = "",
  onChange,
  required = false,
  className = "",
}) => {
  return (
    <div className="flex flex-col relative">
      <label className="text-sm text-color-gray">{label}</label>
      <input
        type="date"
        value={value}
        onChange={onChange}
        className={`border border-color-gray rounded px-4 py-2.5 appearance-none ${className}`}
        required={required}
        style={{
          color: value ? "var(--color-dark)" : "var(--color-light-gray)",
          backgroundColor: "var(--color-light)",
        }}
      />
      <img
        src="/icons/calend.svg"
        alt="calendar"
        className="absolute top-[48%] right-4 pointer-events-none"
        style={{ width: '22px', height: '22px' }}
      />
    </div>
  );
};

export default InputDate;
