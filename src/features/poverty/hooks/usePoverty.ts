import { useQuery } from "@tanstack/react-query";
import { getPoverty } from "../services/poverty.service";


export function usePoverty() {

  return useQuery({
    queryKey: ["poverty"],
    queryFn: getPoverty,
  });

}