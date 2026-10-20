import { usePoverty } from "../hooks/usePoverty";

import PovertySection from "../components/PovertySection";


const Poverty = () => {
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
    return <p>No hay datos de los precios del dólar</p>
  }

  return (
    <>
      <PovertySection 
        data={data.poverty}
        title="Pobreza"
        semester={data.semester}
        year={data.year}
      />
      
      <PovertySection 
        data={data.indigence}
        title="Indigencia"
        semester={data.semester}
        year={data.year}
      />
    </>
  );
}

export default Poverty;