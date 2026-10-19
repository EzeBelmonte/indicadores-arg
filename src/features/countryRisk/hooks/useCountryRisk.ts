import { useQuery } from "@tanstack/react-query";
import { getCountryRisk } from "../services/countryRisk.service";


export function useCountryRisk () {

  return useQuery({
    queryKey: ["riesgoPais"],
    queryFn: getCountryRisk,
  });

}