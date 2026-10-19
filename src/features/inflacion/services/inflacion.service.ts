import type { InflacionData } from "../types/inflacion.type";
import { apiFetcher } from "@/lib/apiFetcher";


export const getInflacionMensual = async (): Promise<InflacionData[]> => {

  const response = await apiFetcher<InflacionData[]>(
    "/api/argentinaDatos.api?indice=inflacion",
    "Error obteniendo la inflación mensual"
  );

  return response;

}


export const getInflacionInteranual = async (): Promise<InflacionData[]> => {

  const response = await apiFetcher<InflacionData[]>(
    "/api/argentinaDatos.api?indice=inflacionInteranual",
    "Error obteniendo la inflación interanual"
  );

  return response;

}