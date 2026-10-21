import { Card } from "@/components";

import type { PovertyIndicator } from "../types/poverty.type";

type Props = {
  data: PovertyIndicator;
  title: string;
  semester: string;
}


const PovertyCard = ({
  data,
  title,
  semester,
}: Props) => {

  return (

    <Card className="flex flex-col gap-5 justify-around items-center semitablet:flex-row">
      <div className="flex flex-col items-center">
        <h2>Hogares bajo la línea de {title.toLowerCase()}</h2>

        <p className="text-cyan-600 text-[2.2rem] font-semibold my-3">
          {data.households}%
        </p>

        <p className="text-white text-[.85rem]">{semester}</p>
      </div>

      <div className="flex flex-col items-center">
        <h2>Población bajo la línea de {title.toLowerCase()}</h2> 

        <p className="text-cyan-600 text-[2.2rem] font-semibold my-3">
          {data.persons}%
        </p>

        <p className="text-white text-[.85rem]">{semester}</p>
      </div>
    </Card>
  
  );
}

export default PovertyCard;