import { useQuery } from "@tanstack/react-query";
import { getEmae } from "../services/emae.service";


export function useEmae() {

  return useQuery({
    queryKey: ["emae"],
    queryFn: getEmae,
  });

}