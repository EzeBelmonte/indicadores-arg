import { useQuery } from "@tanstack/react-query";
import { getDolarApi } from "../services/dolarApi.service";


export function useDolarApi() {

  return useQuery({
    queryKey: ["dolar"],
    queryFn: getDolarApi,
    refetchInterval: 60000,
  });

}