import { useQuery } from "@tanstack/react-query";
import { getDollar } from "../services/dollar.service";


export function useDollar() {

  return useQuery({
    queryKey: ["dolar"],
    queryFn: getDollar,
    refetchInterval: 60000,
  });

}