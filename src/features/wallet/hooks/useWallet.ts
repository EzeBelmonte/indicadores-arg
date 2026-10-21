import { useQuery } from "@tanstack/react-query";
import { getWallet } from "../services/wallet.service";


export function useWallet() {

  return useQuery({
    queryKey: ["wallets"],
    queryFn: getWallet,
    refetchInterval: 60000,
  });

}