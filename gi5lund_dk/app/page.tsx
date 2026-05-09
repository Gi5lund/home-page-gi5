import ServiceCard from './components/ServiceCard';

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-[#1A202C] flex flex-col">
      {/* Gradient background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-blue-300 via-cyan-200 to-teal-50" />

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center min-h-[52vh] px-6 pt-8 pb-16  overflow-hidden">
        <span className="relative z-10 text-xs font-semibold tracking-[0.18em] uppercase text-slate-500 mb-4 block">
          IT-rådgivning &amp; løsninger
        </span>
        <h1 className="relative z-10 text-[2.6rem] leading-tight sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Gi5lund IT
        </h1>
        <p className="relative z-10 text-base sm:text-lg text-slate-600 max-w-xs sm:max-w-md mx-auto mb-8 leading-relaxed">
          Personlig IT-rådgivning og løsninger tilpasset din organisation og dine behov. <i>Let&apos;s keep it simple.</i>

        </p>
        <div className="relative z-10 h-1 w-12 bg-slate-400/50 rounded-full" />
      </section>

      {/* Divider */}
      <div className="w-full max-w-5xl mx-auto px-5 sm:px-8">
        <div className="h-px bg-slate-300/60" />
      </div>

      {/* Ydelser Section */}
      <section id="services" className="w-full max-w-5xl mx-auto py-12 px-5 sm:px-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-1 text-slate-800 text-center tracking-tight">
          Mine Ydelser
        </h2>
        <p className="text-sm text-slate-500 text-center mb-8">
          Hvad kan jeg hjælpe dig med?
        </p>
        <div className="flex flex-col gap-4 sm:grid sm:grid-cols-3 sm:gap-6 ">
          <ServiceCard
            title="Support"
            desc="Hurtig og pålidelig hjælp til dine IT-udfordringer."
            href="/services/support"
            icon="🛠️"
          />
          <ServiceCard
            title="Udvikling"
            desc="Skræddersyede softwareløsninger der effektiviserer. vi gøre det komplekse simpelt."
            href="/services/development"
            icon="</>"
          />
          <ServiceCard
            title="Processer"
            desc="Strømlinede processer for effektivitet og kvalitet i IT-projekter."
            href="/services/processes"
            icon="📋"
          />
        </div>
      </section>

      <div className="mt-auto h-6" />
    </div>
  );
}