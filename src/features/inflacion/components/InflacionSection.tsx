import { useState } from "react";

import { Section, ModalInfo } from "@/components";
import InflacionCard from "../components/InflacionCard";

import { monthName } from "@/helpers";

import type { InflacionData } from "../types/inflacion.type";
import type { UseQueryResult } from "@tanstack/react-query";

type Props = {
  dataQuery: UseQueryResult<InflacionData[], Error>;
  title: string;
}

const InflacionSection = ({ 
  dataQuery,
  title,
}: Props) => {
  // ==================== Estados
  const [dropDown, setDropDown] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const { 
    data,
    isPending,
    error
  } = dataQuery;

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

  const handleSelectMonth = (date: string) => {
    const month = monthName(date);

    if (month == selectedMonth) {
      setSelectedMonth(null);
    } else {
      setSelectedMonth(month);
    }
  }

  // Último dato de inflación
  const ultimaInflacion = data?.at(-1);

  // Obtener el resto de los datos, excluyendo el último e invertir el orden
  const datosInflacion = data?.slice(0, -1).reverse();
  
  const formatterTitle = title.toLowerCase();

  return (

    <Section>
      <div 
        className="flex justify-between items-center"
      >
        <h1>{title}</h1>
        <ModalInfo 
          title={`Información sobre la ${formatterTitle} en Argentina`}
        />
      </div>

      <div className="grid grid-cols-1 gap-3">
        {/* Tarjeta principal */}
        {ultimaInflacion && (
          <InflacionCard
            item={ultimaInflacion}
            showButton
            onButtonClick={handleOpen}
            isOpen={dropDown}
            onClick={() => handleSelectMonth(ultimaInflacion.fecha)}
            isSelected={
              selectedMonth === monthName(ultimaInflacion.fecha) && dropDown
            }
          />
        )}

        {/* Historial */}
        {dropDown && (
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
            {datosInflacion.map((item) => (
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
    </Section>

  );
}

export default InflacionSection;