import { useQuery } from "@tanstack/react-query";
import { getYearOnYearInflation } from "../services/inflation.service";


export function useYearOnYearInflation () {

  return useQuery({
    queryKey: ["inflacionInteranual"],
    queryFn: getYearOnYearInflation,
  });

}