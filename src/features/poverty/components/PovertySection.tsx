import { usePoverty } from "../hooks/usePoverty";

import { 
  Section,
} from "@/components";
import PovertyHeader from "./PovertyHeader";
import PovertyCard from "./PovertyCard";


const PovertySection = () => {
  // ==================== Estados
  const {
    data,
    isPending,
    error,
  } = usePoverty();

  // ==================== Respuestas del hook
  // Esperando la respuesta
  if (isPending) {
    return <p>Cargando...</p>
  }

  // En caso de error
  if (error) {
    return <p>Error: {error.message}</p>
  }

  // En caso de no haber datos
  if (!data) {
    return <p>No hay datos de la pobreza</p>
  }

  // ==================== Otros parámetros
  let semester = data.semester == 1 ? "Primer" : "Segundo";
  semester += ` semestre de ${data.year}`;

  return (

    <Section>
      <PovertyHeader />

      <div className="flex flex-col gap-3">
        <PovertyCard 
          data={data.poverty}
          title="Pobreza"
          semester={semester}
        />

        <PovertyCard 
          data={data.indigence}
          title="Indigencia"
          semester={semester}
        />
      </div>
    </Section>

  );
}

export default PovertySection;