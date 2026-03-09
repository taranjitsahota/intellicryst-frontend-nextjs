import React from "react";

type Props = {
  label: string;
  name: string;
  options: string[];
};

const FormSelect: React.FC<Props> = ({ label, name, options }) => {
  return (
    <div className="space-y-3">
      <label className="text-[10px] font-black text-[var(--deep-blue)] uppercase tracking-widest ml-1">
        {label}
      </label>

      <select
        name={name}
        className="w-full px-5 py-3 rounded-2xl bg-white/60 border border-white focus:border-[var(--primary-color)] focus:bg-white transition-all outline-none font-semibold text-[var(--deep-blue)] shadow-sm"
      >
        <option value="">Select {label}</option>

        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;
