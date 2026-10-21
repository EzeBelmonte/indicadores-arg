import { Card } from "@/components";

import { formatPrice } from "@/helpers";

import type { DollarData } from "../types/dollar.type";

type Props = {
  data: DollarData;
}


const DollarCard = ({ data }: Props) => {

  return (

    <Card>
      <h2 className="mb-3">{data.nombre}</h2>

      <div className="flex justify-between items-baseline">
        <p className="key text-green-300">COMPRA:</p>{" "}
        <p className="value">${formatPrice(data.compra)}</p>
      </div>
      
      <div className="flex justify-between items-baseline">
        <p className="key text-red-300">VENTA:</p>{" "}
        <p className="value">${formatPrice(data.venta)}</p>
      </div>
    </Card>

  );
}

export default DollarCard;