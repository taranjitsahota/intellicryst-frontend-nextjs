import React from "react";

type Props = {
  label: string;
  name: string;
  placeholder?: string;
};

const FormTextarea: React.FC<Props> = ({ label, name, placeholder }) => {
  return (
    <div className="space-y-3">
      <label className="text-[10px] font-black text-[var(--deep-blue)] uppercase tracking-widest ml-1">
        {label}
      </label>

      <textarea
        name={name}
        rows={4}
        placeholder={placeholder}
        className="w-full px-5 py-3 rounded-2xl bg-white/60 border border-white focus:border-[var(--primary-cyan)] focus:bg-white transition-all outline-none font-semibold text-[var(--deep-blue)] shadow-sm placeholder:text-slate-300 resize-none"
      />
    </div>
  );
};

export default FormTextarea;
