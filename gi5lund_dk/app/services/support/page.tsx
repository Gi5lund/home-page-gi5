import ServiceLayout from "../../components/ServiceLayout";

export default function SupportPage() {
  return (
    <ServiceLayout
      title="IT-Support"
      icon="🛠️"
      subtitle="Pålidelig assistance, når teknikken driller. Jeg taler et sprog, alle forstår."
      points={[
        "Fjernsupport via TeamViewer",
        "On-site hjælp på dit kontor",
        "Optimering af langsomme maskiner",
        "Sikkerhedstjek og antivirus"
      ]}
      description={
        <>
          <p>
            IT-udfordringer bør aldrig stå i vejen for din forretning. Hos <strong>Gi5lund IT </strong>
            prioriterer jeg hurtig respons og langsigtede løsninger.
          </p>
          <p>
            Uanset om det drejer sig om printerproblemer, softwarefejl eller hardwareopgraderinger,
            tager jeg hånd om opgaven med ro og professionalisme.
          </p>
        </>
      }
    />
  );
}