import { useInflacionMensual } from "../hooks";

import { Section } from "@/components";

import { cn } from "@/utils/cn";


const Inflacion = () => {
  // ==================== Estados
  const {
    data,
    isPending,
    error,
  } = useInflacionMensual();

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
    return <p>No hay datos de los precios del dólar</p>
  }


  

  return (

    <Section>
      <h1>Inflación mensual</h1>

      <div className={cn(`
          grid grid-cols-1 gap-3`,
        )}
      >

      </div>
    </Section>

  );
}

export default Inflacion;