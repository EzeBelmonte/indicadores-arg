import { useState } from "react";
import { useIsMobile } from "../hooks/useIsMobile";

import {
  Section,
  Card,
  Button
} from "@/components";
import { cn } from "@/utils/cn";

const Dolar = () => {
  const isMobile = useIsMobile();
  const [dropDown, setDropDown] = useState(false);

  // Abrir o cerrar "Ver más"
  const handleOpen = () => {
    setDropDown((prev) => !prev);
  }

  // Esto es momentaneo
  const dolares = [
    { nombre: "Oficial", compra: "$9999.99", venta: "$9999.99" },
    { nombre: "Tarjeta", compra: "$9999.99", venta: "$9999.99" },
    { nombre: "Cripto", compra: "$9999.99", venta: "$9999.99" },
    { nombre: "Otros", compra: "$9999.99", venta: "$9999.99" },
  ]

  const showAll = !isMobile || dropDown;

  return (
    <Section>
      <h1>Dólar</h1>

      <div className={cn(`
          grid grid-cols-1 gap-3 semitablet:grid-cols-2 sm:grid-cols-3 md:grid-cols-4
        `)}
      >
        {dolares.map((dolar, index) => {
          const ocultar = index > 0 && !showAll;

          return (
            <div
              key={dolar.nombre}
              className={cn(
                "min-w-0",
                ocultar && "hidden"
              )}
            >
              <Card>
                <h2 className="mb-2">{dolar.nombre}</h2>
                <p>
                  <span className="key">COMPRA:</span>{" "}
                  <span className="value">{dolar.compra}</span>
                </p>
                <p>
                  <span className="key">VENTA:</span>{" "}
                  <span className="value">{dolar.venta}</span>
                </p>
              </Card>
            </div>
          );
        })}
      </div>

      {isMobile && (
        <Button
          onClick={handleOpen}
          className="text-blue-400 text-[.85rem] mt-2 ml-1"
        >
          {dropDown ? "Ocultar" : "Ver más"}
        </Button>
      )}
    </Section>
  );
}

export default Dolar;