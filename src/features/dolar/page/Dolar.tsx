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
    setDropDown(!dropDown);
  }

  return (
    <Section>

      <h1>Dolar</h1>
      <Card>
        <h2>Oficial</h2>
        <p><span className="key">COMPRA:</span> <span className="value">$9999.99</span></p>
        <p><span className="key">VENTA:</span> <span className="value">$9999.99</span></p>
      </Card>

      {isMobile && (
        <Button 
          onClick={handleOpen}
          className="
            text-blue-400 text-[.85rem] mt-2 ml-1
          ">
            {!dropDown ? (
              "Ver más"
            ) : (
              "Ocultar"
            )}
        </Button>
      )}

      <div className={cn(`
        overflow-hidden
        transition-all duration-300 ease-in-out`,
        !isMobile || dropDown
          ? "opacity-100 mt-5"
          : "max-h-0 opacity-0 mt-0"
      )}>
        <div className="flex flex-col gap-3">
          <Card>
            <h2>Tarjeta</h2>
            <p><span className="key">COMPRA:</span> <span className="value">$9999.99</span></p>
            <p><span className="key">VENTA:</span> <span className="value">$9999.99</span></p>
          </Card>

          <Card>
            <h2>Cripto</h2>
            <p><span className="key">COMPRA:</span> <span className="value">$9999.99</span></p>
            <p><span className="key">VENTA:</span> <span className="value">$9999.99</span></p>
          </Card>

          <Card>
            <h2>Otros</h2>
            <p><span className="key">COMPRA:</span> <span className="value">$9999.99</span></p>
            <p><span className="key">VENTA:</span> <span className="value">$9999.99</span></p>
          </Card>
        </div>
      </div>
    </Section>
  );
}

export default Dolar;