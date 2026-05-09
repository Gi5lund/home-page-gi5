import Link from 'next/link';

interface Props {
  title: string;
  desc: string;
  href: string;
  icon: string;
}

export default function ServiceCard({ title, desc, href, icon }: Props) {
  return (
    <Link href={href} className="group block w-full max-w-sm">
      <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-sky-400 hover:scale-105  flex flex-col h-75  overflow-hidden">
        <div className="text-3xl mb-4 text-[#94a3b8]">{icon}</div>
        <h3 className="text-xl font-bold mb-3 group-hover:text-[#94a3b8] transition-colors">{title}</h3>
        <p className="text-slate-600 leading-relaxed line-clamp-3 group-hover:overflow-visible">{desc}</p>
        <span className="inline-block mt-4 text-sm font-semibold text-[#94a3b8]">Læs mere →</span>
      </div>
    </Link>
  );
}