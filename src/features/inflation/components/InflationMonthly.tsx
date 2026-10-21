import { useState } from "react";

import InflacionCard from "./InflationCard";

import { monthName } from "@/helpers";

import type { InflationData } from "../types/inflation.type";

type Props = {
  data: InflationData[];
}


const InflationMonthly = ({ data }: Props) => {
   // ==================== Estados
  const [dropDown, setDropDown] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);

  // ==================== Funciones y otros parámetros
  // Abrir o cerrar historial
  const handleOpen = () => {
    setDropDown((prev) => !prev);
  }

  const handleSelectMonth = (date: string) => {
    const month = monthName(date);

    if (month == selectedMonth) {
      setSelectedMonth(null);
    } else {
      setSelectedMonth(month);
    }
  }

  // Último dato de inflación
  const latestInflation = data?.at(-1);
  // Obtener el resto de los datos, excluyendo el último e invertir el orden
  const otherInflation = data?.slice(0, -1).reverse();


  return (

    <div className="grid grid-cols-1 gap-3">
      {/* Tarjeta principal */}
      {latestInflation && (
        <InflacionCard
          item={latestInflation}
          showButton
          onButtonClick={handleOpen}
          isOpen={dropDown}
          onClick={() => handleSelectMonth(latestInflation.fecha)}
          isSelected={
            selectedMonth === monthName(latestInflation.fecha) && dropDown
          }
          title="Inflación mensual"
        />
      )}

      {/* Historial */}
      {dropDown && (
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
          {otherInflation.map((item) => (
            <InflacionCard
              key={item.fecha}
              item={item}
              onClick={() => handleSelectMonth(item.fecha)}
              isSelected={
                selectedMonth === monthName(item.fecha)
              }
            />
          ))}
        </div>
      )}
    </div>

  );
}

export default InflationMonthly;