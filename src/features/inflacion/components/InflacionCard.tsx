import { Card, Button } from "@/components";

import { formatNormalDate, monthName } from "@/helpers";

import type { InflacionData } from "../types/inflacion.type";

type Props = {
  item: InflacionData;
  showButton?: boolean;
  onButtonClick?: () => void;
  isOpen?: boolean;
};


const InflacionCard = ({
  item,
  showButton = false,
  onButtonClick,
  isOpen = false,
}: Props) => {
  const fecha = item.fecha ?? "";

  return (

    <Card className="flex flex-col justify-center items-center">
      <p className="text-white text-[1.3rem]">
        {fecha ? monthName(fecha) : "Sin fecha"}
      </p>

      <p className="text-cyan-600 text-[2.2rem] font-semibold">
        {item.valor}
      </p>

      <div className="w-full flex justify-between items-baseline">
        {showButton && (
          <Button
            onClick={onButtonClick}
            className="text-blue-400 text-[.85rem] mt-2 ml-1"
          >
            {isOpen ? "Ocultar" : "Ver historial"}
          </Button>
        )}

        <p className="text-gray-500 text-[.7rem] ml-auto">
          {fecha ? formatNormalDate(fecha) : "Sin fecha"}
        </p>
      </div>
    </Card>

  );
}

export default InflacionCard;