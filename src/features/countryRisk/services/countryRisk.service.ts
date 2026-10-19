import type {
  BaseCountryRiskData,
} from "../types/countryRisk.type";

import { apiFetcher } from "@/lib/apiFetcher";


export const getCountryRisk = async (): Promise<BaseCountryRiskData> => {

  const response = await apiFetcher<BaseCountryRiskData>(
    "/api/argly.api",
    "Error obteniendo el riesgo país actual"
  );

  return response;

}


export const getPreviousCountryRisk = async (): Promise<BaseCountryRiskData> => {

  const response = await apiFetcher<BaseCountryRiskData>(
    "/api/argly.api?anterior=true",
    "Error obteniendo el riesgo país actual"
  );

  return response;

}