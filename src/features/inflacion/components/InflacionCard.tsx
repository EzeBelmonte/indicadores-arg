import { Card, Button } from "@/components";

import { formatNormalDate, monthName } from "@/helpers";
import { cn } from "@/utils/cn";

import type { InflacionData } from "../types/inflacion.type";

type Props = {
  item: InflacionData;
  showButton?: boolean;
  onButtonClick?: () => void;
  isOpen?: boolean;
  onClick?: () => void;
  isSelected?: boolean;
};


const InflacionCard = ({
  item,
  showButton = false,
  onButtonClick,
  isOpen = false,
  onClick,
  isSelected,
}: Props) => {
  const fecha = item.fecha ?? "";



  return (

    <Card 
      onClick={onClick}
      className={cn(`
        flex flex-col justify-center items-center transition-colors duration-300`,
        isSelected
          ? "bg-blue-400/20"
          : ""
      )}
    >
      <p className="text-white text-[1.3rem]">
        {fecha ? monthName(fecha) : "Sin fecha"}
      </p>

      <p className="text-cyan-600 text-[2.2rem] font-semibold">
        {item.valor}
      </p>

      <div className="w-full flex justify-between items-baseline mt-2 z-10">
        {showButton && (
          <Button
            onClick={onButtonClick}
            className="text-blue-400 hover:text-blue-300 text-[.85rem] cursor-pointer"
          >
            {isOpen ? "Ocultar" : "Ver historial"}
          </Button>
        )}

        <p className="text-gray-500 text-[.6rem] ml-auto">
          {fecha ? formatNormalDate(fecha) : "Sin fecha"}
        </p>
      </div>
    </Card>

  );
}

export default InflacionCard;