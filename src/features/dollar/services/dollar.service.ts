import type { DollarData } from "../types/dollar.type";
import { apiFetcher } from "@/lib/apiFetcher";


export const getDollar = async (): Promise<DollarData[]> => {

  const response = await apiFetcher<DollarData[]>(
    "/api/dolarApi.api",
    "Error obteniendo precios del dólar"
  );

  return response;
  
}