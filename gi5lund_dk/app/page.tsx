import ServiceCard from './components/ServiceCard';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-6 text-slate-900">Gi5lund IT</h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Personlig IT-rådgivning og løsninger til din hverdag.
          Vi skaber tryghed i din digitale infrastruktur.
        </p>
        <div className="h-1.5 w-24 bg-[#94a3b8] mx-auto rounded-full"></div>
      </section>

      {/* Ydelser Section */}
      <section id="ydelser" className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Mine Ydelser</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Support"
            desc="Hurtig og pålidelig hjælp til dine IT-udfordringer."
            href="/services/support"
            icon="🛠️"
          />
          <ServiceCard
            title="Udvikling"
            desc="Skræddersyede softwareløsninger der effektiviserer."
            href="/services/development"
            icon="</>"
          />
          <ServiceCard
            title="Netværk"
            desc="Sikre og stabile netværksløsninger til kontoret."
            href="/services/processes"
            icon="🌐"
          />
        </div>
      </section>
    </div>
  );
}