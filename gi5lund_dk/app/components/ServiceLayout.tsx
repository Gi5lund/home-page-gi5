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
    <article className="min-h-screen pb-16 ">

      {/* 1. Hero */}
      <header className="max-w-4xl mx-auto px-5 sm:px-6 pt-8 pb-10 sm:py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-slate-600 active:text-slate-800 transition-colors mb-8"
        >
          ← Tilbage til oversigten
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">{icon}</span>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight leading-tight">
          {title}
        </h1>
        <p className="text-base sm:text-xl text-slate-500 leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      </header>

      {/* 2. Indhold & Fordele */}
      <section className="max-w-4xl mx-auto px-5 sm:px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">

          {/* Main content */}
          <div className="md:col-span-2 prose prose-slate prose-base sm:prose-lg text-slate-600">
            {description}
          </div>

          {/* Sidebar — sits below content on mobile, beside on md+ */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm h-fit">
            <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">
              Hvad du får
            </h3>
            <ul className="space-y-3">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-slate-600">
                  <span className="text-slate-400 mt-0.5 shrink-0">✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* 3. CTA */}
      <section className="max-w-4xl mx-auto px-5 sm:px-6">
        <div className="bg-[#2c3e50] text-white px-6 py-10 sm:p-12 rounded-2xl sm:rounded-3xl text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 leading-snug">
            Har du brug for hjælp til {title.toLowerCase()}?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-sm mx-auto">
            Kontakt mig for en uforpligtende snak om dine behov.
          </p>
          <Link
            href="/#kontakt"
            className="inline-block bg-[#94a3b8] hover:bg-white hover:text-slate-900 active:scale-95 text-white px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold transition-all"
          >
            Book et møde i dag
          </Link>
        </div>
      </section>

    </article>
  );
}