import ServiceLayout from "../../components/ServiceLayout";

export default function DevelopmentPage() {
  return (
    <ServiceLayout
      title="Softwareudvikling"
      icon="🛠️"
      subtitle="Skræddersyede softwareløsninger, der driver din forretning fremad. Fra idé til implementering, jeg er med hele vejen."
      points={[
        "udvikling af brugerdefinerede applikationer og værktøjer",
        "integration af eksisterende systemer",
        "optimering af arbejdsprocesser gennem automatisering",
        "rådgivning om teknologi og softwarevalg",
        "specificering og design af softwareløsninger"
      ]}
      description={
        <>
          <p>
            Hvis du står med et tilbagevendende behov, kan jeg hjælpe dig med at analysere det og finde den rigtige løsning. Hos <strong>Gi5lund IT </strong>  kigger vi på hele processen, nogle gange kan det være en simpel automatisering, der sparer dig for tid og penge, andre gange kan det være en komplet softwareløsning, der løser et komplekst problem.
          </p>
          <p>
            Uanset behovets omfang og kompleksistet, står jeg klar med rådgivning og en løsning der passer til dig og din virksomhed.
          </p>
        </>
      }
    />
  );
}