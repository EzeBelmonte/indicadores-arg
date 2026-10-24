import { useEmae } from "../hooks/useEmae";

import EmaeHeader from "./EmaeHeader";
import EmaeMainCard from "./EmaeMainCard";
import { 
  Section,
} from "@/components";

const EmaeSection = () => {
  // ==================== Estados
  const {
    data,
    isPending,
    error,
  } = useEmae();

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
    return <p>No hay datos del EMAE</p>
  }

  return (

    <Section>

      <EmaeHeader />

      <div className="flex flex-col gap-3">
        <EmaeMainCard data={data} />
      </div>

    </Section>

  );
}

export default EmaeSection;