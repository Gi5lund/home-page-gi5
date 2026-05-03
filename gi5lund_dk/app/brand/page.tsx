import Link from 'next/link';
export default function MyBrandPage() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-6">
            <div className="min-h-screen font-sans text-[#1A202C]">
                <div className="text-right">
                    <Link
                        href="/"
                        className="text-sm font-medium transition-colors hover:text-[#94a3b8] text-right"
                    >
                        Til forsiden
                    </Link>

                </div>

                <h2 className="text-xl font-bold mb-3 group-hover:text-[#94a3b8] transition-colors"> Hvem er Gi5lund IT?</h2>
                <p className="text-slate-600 leading-relaxed">Efter mange år i skoleverden skiftede jeg til IT-branchen</p>

            </div>
        </div>

    );

}