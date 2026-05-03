import ServiceLayout from "../../components/ServiceLayout";

export default function ProcessesPage() {
  return (
    <ServiceLayout
      title="Udviklingsprocesser"
      icon="📋"
      subtitle="Strømlinede processer, der sikrer effektivitet og kvalitet i alle IT-projekter."
      points={[
        "Overblik over projektets faser",
        "Tidsplanlægning og milepæle",
        "Risikostyring og problemløsning",
        "Samarbejde og kommunikation"
      ]}
      description={
        <>
          <p>
            Udviklingsprocesser kræver en struktureret tilgang. Hos <strong>Gi5lund IT </strong>
            udvikler jeg skræddersyede processer, der passer til dine specifikke behov og mål. Jeg sikrer, at alle projekter følger en klar tidsplan og opfylder de højeste kvalitetsstandarder.
          </p>
          <p>
            Uanset om det drejer sig om softwareudvikling, systemimplementering eller IT-infrastruktur, arbejder jeg tæt sammen med dig for at sikre, at alle aspekter af projektet er gennemtænkte og velkoordinerede.
          </p>
        </>
      }
    />
  );
}