import { useQuery } from "@tanstack/react-query";
import { getInflacionMensual } from "../services/inflacion.service";


export function useInflacionMensual() {

  return useQuery({
    queryKey: ["inflacionMensual"],
    queryFn: getInflacionMensual,
  });

}