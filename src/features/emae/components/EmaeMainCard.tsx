import { Card } from "@/components";

import type { EmaeData } from "../types/emae.type";

import { monthName } from "@/helpers";
import { yearOnly } from "@/helpers";


type Props = {
  data: EmaeData;
}


const EmaeMainCard = ({ data }: Props) => {

  const fecha = `${data.data.date}-01`;
  console.log("mal");
  const month = monthName(fecha);
  const year = yearOnly(fecha);

  return (

    <Card className="flex flex-col gap-5 justify-around items-center semitablet:flex-row">
      <div className="flex flex-col items-center">
        <h3>Índice general de actividad económica</h3>

        <p className="text-cyan-600 text-[2.2rem] font-semibold my-3">
          {data.general_index}
        </p>

        <p className="text-white text-[.85rem]">Base {data.metadata.base_year} = 100 · {month} {year}</p>
      </div>

      <div className="flex flex-col items-center">
        
      </div>
    </Card>
  
  );
}

export default EmaeMainCard;