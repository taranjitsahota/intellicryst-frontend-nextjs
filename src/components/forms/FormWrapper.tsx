"use client";

import React, { useState, useRef } from "react";

type Props = {
  children: (props: { loading: boolean }) => React.ReactNode;
};

const FormWrapper: React.FC<Props> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        setSubmitted(true);

        formRef.current.reset();

        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      }
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
        {children({ loading })}
      </form>

      {submitted && (
        <div className="mt-6 flex items-center gap-3 p-5 rounded-2xl bg-white border border-[#00F5D4]/40 shadow-lg animate-fade-in">
          <div className="w-10 h-10 rounded-full bg-[#00F5D4] flex items-center justify-center text-white font-bold">
            ✓
          </div>

          <div>
            <p className="font-bold text-[#012B48]">Message Sent</p>
            <p className="text-sm text-slate-500">
              We'll get back to you shortly.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default FormWrapper;
