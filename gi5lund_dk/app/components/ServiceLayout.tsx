import Link from 'next/link';

interface ServiceLayoutProps {
  title: string;
  subtitle: string;
  description: React.ReactNode;
  points: string[];
  icon: string;
}

export default function ServiceLayout({ title, subtitle, description, points, icon }: ServiceLayoutProps) {
  return (
    <article className="min-h-screen pb-20 ">
      {/* 1. Subtil Hero Sektion */}
      <header className="bg-transparent ">
        <div className="max-w-4xl mx-auto px-6 py-6">

          <div className="text-4xl mb-4">{icon}
            <Link href="/" className="text-sm font-medium text-slate-400 hover:text-gi-sage transition mb-8 inline-block">
            ← Tilbage til oversigten
          </Link>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            {title}
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        </div>
      </header>

      {/* 2. Indhold & Fordele */}
      <section className="max-w-4xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 prose prose-slate prose-lg text-slate-600">
          {description}
        </div>

        {/* Sidebar med fokuspunkter */}
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 h-fit">
          <h3 className="font-bold text-slate-900 mb-4">Hvad du får:</h3>
          <ul className="space-y-3">
            {points.map((point, index) => (
              <li key={index} className="flex items-start text-sm text-slate-600">
                <span className="text-gi-sage mr-2">✓</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. CTA Sektion */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="bg-[#2c3e50] text-white p-10 rounded-3xl text-center">
          <h2 className="text-2xl font-bold mb-4">Har du brug for hjælp til {title.toLowerCase()}?</h2>
          <p className="text-slate-300 mb-8">Kontakt mig for en uforpligtende snak om dine behov.</p>
          <Link href="/#kontakt" className="bg-[#94a3b8] hover:bg-white hover:text-slate-900 text-white px-8 py-3 rounded-full font-semibold transition-all">
            Book et møde i dag
          </Link>
        </div>
      </section>
    </article>
  );
}