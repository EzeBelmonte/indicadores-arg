import { Section, ModalInfo, Card } from "@/components";

import { formatNormalDate } from "@/helpers";

import type { BaseCountryRiskData } from "../types/countryRisk.type";
import type { UseQueryResult } from "@tanstack/react-query";

type Props = {
  dataQuery: UseQueryResult<BaseCountryRiskData, Error>;
  title: string;
}


const CountryRiskSection = ({
  dataQuery,
  title,
}: Props) => {
  // ==================== Estados
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

  // Verificamos si se recibio fecha o no
  const fecha = data.fecha !== "" ? formatNormalDate(data.fecha) : "Cierre anterior";

  return (

    <Section>
      <div 
        className="flex justify-between items-center"
      >
        <h1>{title}</h1>
        <ModalInfo title="Información sobre el dólar en Argentina" />
      </div>

      <Card className="flex flex-col justify-center items-center">
        <p className="text-white">
          {fecha}
        </p>

        <p className="text-cyan-600 text-[2.2rem] font-semibold">
          {data.ultimo}
        </p>
      </Card>
    </Section>

  );
}

export default CountryRiskSection;