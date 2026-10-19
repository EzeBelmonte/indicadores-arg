import { useState } from "react";

import { Section } from "@/components";
import InflacionCard from "../components/InflacionCard";

import type { InflacionData } from "../types/inflacion.type";


type Props = {
  data: InflacionData[];
}

const InflacionMensual = ({ data }: Props) => {
  // ==================== Estados
  const [dropDown, setDropDown] = useState(false);

  // ==================== Funciones y otros parámetros
  // Abrir o cerrar historial
  const handleOpen = () => {
    setDropDown((prev) => !prev);
  }

  // Último dato de inflación
  const ultimaInflacion = data?.at(-1);

  // Obtener el resto de los datos, excluyendo el último e invertir el orden
  const datosInflacion = data?.slice(0, -1).reverse();
  
  return (

    <Section>
      <h1>Inflación mensual</h1>

      <div className="grid grid-cols-1 gap-3">
        {/* Tarjeta principal */}
        {ultimaInflacion && (
          <InflacionCard
            item={ultimaInflacion}
            showButton
            onButtonClick={handleOpen}
            isOpen={dropDown}
          />
        )}

        {/* Historial */}
        {dropDown && 
          datosInflacion.map((item) => (
            <InflacionCard 
              key={item.fecha}
              item={item}
            />
        ))}
      </div>
    </Section>

  );
}

export default InflacionMensual;