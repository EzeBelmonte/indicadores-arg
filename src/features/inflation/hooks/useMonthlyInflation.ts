import { useQuery } from "@tanstack/react-query";
import { getMonthlyInflation } from "../services/inflation.service";


export function useMonthlyInflation() {

  return useQuery({
    queryKey: ["inflacionMensual"],
    queryFn: getMonthlyInflation,
  });

}