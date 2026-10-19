import { useInflacionMensual } from "../hooks";

import InflacionMensual from "./InflacionMensual";

const Inflacion = () => {
  // ==================== Estados
  const {
    data: IpcMensual,
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
  if (!IpcMensual) {
    return <p>No hay datos de los precios del dólar</p>
  }

  return (

    <InflacionMensual data={IpcMensual} />

  );
}

export default Inflacion;