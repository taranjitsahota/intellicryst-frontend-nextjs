export const metadata = {
  title: "Privacy Policy | Intellicryst Technology",
  description:
    "Read the privacy policy for using Intellicryst Tech services and website.",
};

const PrivacyPolicy = () => {
  return (
    <div className="max-w-[1800px] mx-auto p-8 md:px-16 lg:px-24 relative overflow-hidden">

      <div className="gaussian-blur-accent w-[500px] h-[500px] top-[-10%] right-[-10%] opacity-[0.05]"></div>

      <div className="text-center mb-16 space-y-6">
        <h4 className="text-[var(--deep-blue)] font-black text-xs uppercase tracking-[0.4em]">
          Legal
        </h4>

        <h1 className="text-4xl lg:text-5xl font-black text-[var(--deep-blue)] tracking-tighter leading-[0.95]">
          Privacy Policy <br className="hidden md:block" />
          <span className="gradient-text">Your Data Matters</span>
        </h1>

        <p className="text-[var(--grey-text)] font-semibold max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">
          This policy explains how Intellicryst collects, uses, and protects
          your information when you interact with our website or services.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-10">

        <section className="bg-white border border-slate-100 p-8 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.03)]">
          <h3 className="text-2xl font-black text-[var(--deep-blue)] mb-4">
            1. Information We Collect
          </h3>
          <p className="text-[var(--grey-text)] leading-relaxed font-medium">
            We may collect information such as your name, email address,
            company details, and project requirements when you contact us
            through forms or communication channels.
          </p>
        </section>

        <section className="bg-white border border-slate-100 p-8 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.03)]">
          <h3 className="text-2xl font-black text-[var(--deep-blue)] mb-4">
            2. How We Use Your Information
          </h3>
          <p className="text-[var(--grey-text)] leading-relaxed font-medium">
            Your information is used to respond to inquiries, deliver our
            services, improve our platform, and maintain communication with
            clients and partners.
          </p>
        </section>

        <section className="bg-white border border-slate-100 p-8 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.03)]">
          <h3 className="text-2xl font-black text-[var(--deep-blue)] mb-4">
            3. Data Security
          </h3>
          <p className="text-[var(--grey-text)] leading-relaxed font-medium">
            Intellicryst implements modern security practices to protect your
            data from unauthorized access, misuse, or disclosure.
          </p>
        </section>

        <section className="bg-white border border-slate-100 p-8 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.03)]">
          <h3 className="text-2xl font-black text-[var(--deep-blue)] mb-4">
            4. Third-Party Services
          </h3>
          <p className="text-[var(--grey-text)] leading-relaxed font-medium">
            Our website may integrate with trusted third-party services for
            analytics, hosting, or communication tools. These providers may
            process data according to their own privacy policies.
          </p>
        </section>

        <section className="bg-white border border-slate-100 p-8 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.03)]">
          <h3 className="text-2xl font-black text-[var(--deep-blue)] mb-4">
            5. Policy Updates
          </h3>
          <p className="text-[var(--grey-text)] leading-relaxed font-medium">
            Intellicryst may update this Privacy Policy periodically. Changes
            will be reflected on this page with the latest revision date.
          </p>
        </section>

      </div>
    </div>
  );
};

export default PrivacyPolicy;