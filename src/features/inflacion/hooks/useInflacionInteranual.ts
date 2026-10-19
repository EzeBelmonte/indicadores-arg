import { useQuery } from "@tanstack/react-query";
import { getInflacionInteranual } from "../services/inflacion.service";


export function useInflacionInteranual () {

  return useQuery({
    queryKey: ["inflacionInteranual"],
    queryFn: getInflacionInteranual,
  });

}