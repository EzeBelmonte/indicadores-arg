import type { EmaeData } from "../types/emae.type";
import { apiFetcher } from "@/lib/apiFetcher";


export const getEmae = async (): Promise<EmaeData> => {

  const response = await apiFetcher<EmaeData>(
    "/api/argenStatsEmae.api",
    "Error obteniendo datos del EMAE"
  );

  return response;

}