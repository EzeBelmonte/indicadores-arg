import type { InflationData } from "../types/inflation.type";

import { apiFetcher } from "@/lib/apiFetcher";


export const getMonthlyInflation = async (): Promise<InflationData[]> => {

  const response = await apiFetcher<InflationData[]>(
    "/api/argentinaDatos.api?indice=inflacion",
    "Error obteniendo la inflación mensual"
  );

  return response;

}


export const getYearOnYearInflation = async (): Promise<InflationData[]> => {

  const response = await apiFetcher<InflationData[]>(
    "/api/argentinaDatos.api?indice=inflacionInteranual",
    "Error obteniendo la inflación interanual"
  );

  return response;

}