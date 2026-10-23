import type { PovertyData } from "../types/poverty.type";
import { apiFetcher } from "@/lib/apiFetcher";


export const getPoverty = async (): Promise<PovertyData> => {

  const response = await apiFetcher<PovertyData>(
    "/api/argenStatsPoverty.api",
    "Error obteniendo datos de pobreza"
  );

  return response;

}