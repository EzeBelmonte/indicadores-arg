import { Card } from "@/components";

import type { BaseCountryRiskData } from "../types/countryRisk.type";

import { formatNormalDate } from "@/helpers";

type Props = {
  data: BaseCountryRiskData;
}


const CountryRiskCard = ({ data }: Props) => {
  const fecha = data.fecha !== "" ? formatNormalDate(data.fecha) : "Cierre anterior";
  return (

    <Card className="flex flex-col justify-center items-center">
      <p className="text-white">
        {fecha}
      </p>

      <p className="text-cyan-600 text-[2.2rem] font-semibold">
        {data.ultimo}
      </p>
    </Card>
  );
}

export default CountryRiskCard;