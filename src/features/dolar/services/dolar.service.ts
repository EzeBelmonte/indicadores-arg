import type { DolarData } from "../types/dolar.type";
import { apiFetcher } from "@/lib/apiFetcher";


export const getDolar = async (): Promise<DolarData[]> => {

  const response = await apiFetcher<DolarData[]>(
    "/api/dolarApi.api",
    "Error obteniendo precios del dólar"
  );

  return response;
  
}