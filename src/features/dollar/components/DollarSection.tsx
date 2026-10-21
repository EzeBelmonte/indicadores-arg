import { useState } from "react";
import { useIsMobile, useDollar } from "../hooks";

import {
  Section,
  Button,
  Information,
} from "@/components";
import DollarCard from "./DollarCard";

import { cn } from "@/utils/cn";


const DollarSection = () => {
  // ==================== Estados
  const {
    data,
    isPending,
    error,
  } = useDollar();
  const isMobile = useIsMobile();
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
  // Abrir o cerrar "Ver más"
  const handleOpen = () => {
    setDropDown((prev) => !prev);
  }

  const showAll = !isMobile || dropDown;


  // ==================== Retorno
  return (
    <Section>
      <div 
        className="flex justify-between items-center"
      >
        <h1>Dólar</h1>
        <Information title="Información sobre el dólar en Argentina" />
      </div>

      <div className="
        grid grid-cols-1 gap-3 semitablet:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
      ">
        {data.map((dolar, index) => {
          const ocultar = index > 0 && !showAll;

          return (
            <div
              key={dolar.nombre}
              className={cn(
                "min-w-0 overflow-hidden transition-all duration-200 ease-in-out",
                ocultar
                  ? "opacity-0 hidden"
                  : "opacity-100"
              )}
            >

              <DollarCard data={dolar} />

            </div>
          );
        })}
      </div>

      {isMobile && (
        <Button
          onClick={handleOpen}
          className="text-blue-400 hover:text-blue-300 text-[.85rem] mt-2 ml-1 cursor-pointer"
          title={dropDown ? "Ocultar" : "Ver precio de otros tipos de dólar"}
        >
          {dropDown ? "Ocultar" : "Ver más"}
        </Button>
      )}
    </Section>
  );
}

export default DollarSection;