import { usePoverty } from "../hooks/usePoverty";

import PovertySection from "../components/PovertySection";


const PovertyPage = () => {
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

    <PovertySection 
      data={data}
    />
  );
}

export default PovertyPage;