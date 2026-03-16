export const metadata = {
  title: "Terms & Conditions | Intellicryst Technology",
  description:
    "Read the terms and conditions for using Intellicryst Tech services and website.",
};

const TermsConditions = () => {
  return (
    <div className="max-w-[1800px] mx-auto p-8 md:px-16 lg:px-24 relative overflow-hidden">

      <div className="gaussian-blur-accent w-[500px] h-[500px] top-[-10%] left-[-10%] opacity-[0.05]"></div>

      <div className="text-center mb-16 space-y-6">
        <h4 className="text-[var(--deep-blue)] font-black text-xs uppercase tracking-[0.4em]">
          Legal
        </h4>

        <h1 className="text-4xl lg:text-5xl font-black text-[var(--deep-blue)] tracking-tighter leading-[0.95]">
          Terms & Conditions <br className="hidden md:block" />
          <span className="gradient-text">For Using Intellicryst</span>
        </h1>

        <p className="text-[var(--grey-text)] font-semibold max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">
          These terms govern your use of the Intellicryst website and
          services. By accessing our platform, you agree to comply with the
          conditions outlined below.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-10">

        <section className="bg-white border border-slate-100 p-8 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.03)]">
          <h3 className="text-2xl font-black text-[var(--deep-blue)] mb-4">
            1. Introduction
          </h3>
          <p className="text-[var(--grey-text)] leading-relaxed font-medium">
            Welcome to Intellicryst Tech. These Terms and Conditions outline
            the rules and regulations for the use of our website and services.
            By accessing this website, you accept these terms in full.
          </p>
        </section>

        <section className="bg-white border border-slate-100 p-8 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.03)]">
          <h3 className="text-2xl font-black text-[var(--deep-blue)] mb-4">
            2. Services
          </h3>
          <p className="text-[var(--grey-text)] leading-relaxed font-medium">
            Intellicryst provides software development, cloud engineering,
            web development, and mobile application solutions. Service
            engagement terms such as scope, timelines, and deliverables will
            be agreed upon separately in formal project agreements.
          </p>
        </section>

        <section className="bg-white border border-slate-100 p-8 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.03)]">
          <h3 className="text-2xl font-black text-[var(--deep-blue)] mb-4">
            3. Intellectual Property
          </h3>
          <p className="text-[var(--grey-text)] leading-relaxed font-medium">
            All materials on this website including text, graphics, design,
            and code are owned by Intellicryst unless otherwise stated.
            Unauthorized reproduction or redistribution is strictly
            prohibited.
          </p>
        </section>

        <section className="bg-white border border-slate-100 p-8 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.03)]">
          <h3 className="text-2xl font-black text-[var(--deep-blue)] mb-4">
            4. Limitation of Liability
          </h3>
          <p className="text-[var(--grey-text)] leading-relaxed font-medium">
            Intellicryst shall not be liable for any indirect or consequential
            damages resulting from the use of our website, services, or
            products.
          </p>
        </section>

        <section className="bg-white border border-slate-100 p-8 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.03)]">
          <h3 className="text-2xl font-black text-[var(--deep-blue)] mb-4">
            5. Third-Party Links
          </h3>
          <p className="text-[var(--grey-text)] leading-relaxed font-medium">
            Our website may contain links to third-party platforms. We are not
            responsible for the content, policies, or practices of external
            websites.
          </p>
        </section>

        <section className="bg-white border border-slate-100 p-8 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.03)]">
          <h3 className="text-2xl font-black text-[var(--deep-blue)] mb-4">
            6. Updates to Terms
          </h3>
          <p className="text-[var(--grey-text)] leading-relaxed font-medium">
            Intellicryst reserves the right to update these Terms and
            Conditions at any time. Continued use of the website indicates
            acceptance of the updated terms.
          </p>
        </section>

      </div>
    </div>
  );
};

export default TermsConditions;