import { useQuery } from "@tanstack/react-query";
import { getPreviousCountryRisk } from "../services/countryRisk.service";


export function usePreviousCountryRisk () {

  return useQuery({
    queryKey: ["ultimoRiesgoPais"],
    queryFn: getPreviousCountryRisk,
  });

}