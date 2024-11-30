import React from "react";
import Image from "next/image";

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
      <Image
        src="/icons/calend.svg"
        alt="Calendar"
        width={22}
        height={22}
        className="absolute top-[48%] right-4 pointer-events-none"
      />
    </div>
  );
};

export default InputDate;
