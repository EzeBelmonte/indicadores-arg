import { useState } from "react";
import { useInflacionMensual } from "../hooks";

import { 
  Section,
  Card,
  Button,
} from "@/components";

import { cn } from "@/utils/cn";
import { formatNormalDate, monthName } from "@/helpers";


const Inflacion = () => {
  // ==================== Estados
  const {
    data,
    isPending,
    error,
  } = useInflacionMensual();
  const [dropDown, setDropDown] = useState(false);


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


  // ==================== Funciones y otros parámetros
  // Abrir o cerrar historial
  const handleOpen = () => {
    setDropDown((prev) => !prev);
  }

  // Último dato de inflación
  const ultimaInflacion = data?.at(-1);

  // Obtener el resto de los datos, excluyendo el último,
  // e invertir el orden
  const datosInflacion = data?.slice(0, -1).reverse();
  
  // Fecha última inflación
  const lastDate = ultimaInflacion?.fecha ?? "";

  return (

    <Section>
      <h1>Inflación mensual</h1>

      <div className={cn(`
          grid grid-cols-1 gap-3`,
        )}
      >
        {/* Valor actual de la inflación */}
        <Card className="flex flex-col justify-center items-center">
          <p className="text-white text-[1.3rem]">{lastDate != "" ? monthName(lastDate) : "Sin fecha"}</p>

          <p className="text-cyan-600 text-[2.2rem] font-semibold">{ultimaInflacion?.valor}</p>

          <div className="w-full flex justify-between items-baseline">
            <Button
              onClick={handleOpen}
              className="text-blue-400 text-[.85rem] mt-2 ml-1"
            >
              {dropDown ? "Ocultar" : "Ver historial"}
            </Button>

            <p className="text-gray-500 text-[.7rem] ml-auto">
              {lastDate != "" ? formatNormalDate(lastDate) : "Sin fecha"}
            </p>
          </div>
        </Card>

        
      </div>
    </Section>

  );
}

export default Inflacion;