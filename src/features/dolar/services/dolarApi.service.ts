import type { DolarApiData } from "../types/dolarApi.type";
import { apiFetcher } from "@/lib/apiFetcher";

export const getDolarApi = async (): Promise<DolarApiData[]> => {

  const response = await apiFetcher<DolarApiData[]>(
    "/api/dolarApi",
    "Error obteniendo precios del dólar"
  );

  return response;
  
}