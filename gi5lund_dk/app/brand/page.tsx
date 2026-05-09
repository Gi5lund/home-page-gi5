import Link from 'next/link';
import Image from 'next/image';
export default function MyBrandPage() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-6">
            <div className="min-h-screen font-sans text-[#1A202C]">
                <div className="text-right">
                    <Link
                        href="/"
                        className="text-sm font-medium transition-colors hover:text-[#94a3b8] text-right flex justify-end px-5 items-center gap-1"
                    >
                        <b>Til forsiden</b>
                    </Link>

                </div>
                <div>
                <div className="flex justify-end items-center gap-3 mb-6">
                    <Image
                        src="/mgprofil20200527.jpg"
                        alt="Gi5lund IT Logo"
                        width={300}
                        height={300}
                        className="w-32 h-32 md:w-40 md:h-40 object-contain mt-10 hover:scale-115 transition-transform duration-300"
                    />
                </div>
                <h2 className="text-xl font-bold mb-3 hover:text-[#94a3b8] transition-colors"> Hvem er Gi5lund IT?</h2>
                <p className="text-slate-600 leading-relaxed">Efter mange år i skoleverden tog jeg springet til IT-branchen med et ønske om at udvikle endnu bedre løsninger og automatisere processer. I min tidligere rolle som afdelingsleder stod jeg ofte med tilbagevendende opgaver og udfordringer som kaldte på et overskueligt værktøj eller automatisering.</p><br />
                <p className="text-slate-600 leading-relaxed">Jeg opdagede, at jeg havde en unik evne til at finde løsninger, at forstå processer og forstå de behov der var til løsningen.</p><br />
                <p className="text-slate-600 leading-relaxed"></p>
                </div>

            </div>
        </div>

    );

}