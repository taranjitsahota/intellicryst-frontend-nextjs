import React from "react";

type Props = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
};

const FormField: React.FC<Props> = ({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
}) => {
  return (
    <div className="space-y-3">
      <label className="text-[10px] font-black text-[var(--deep-blue)] uppercase tracking-widest ml-1">
        {label}
      </label>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full px-5 py-3 rounded-2xl bg-white/60 border border-white focus:border-[var(--primary-color)] focus:bg-white transition-all outline-none font-semibold text-[var(--deep-blue)] shadow-sm placeholder:text-slate-300"
      />
    </div>
  );
};

export default FormField;
