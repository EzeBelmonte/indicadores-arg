import type { WalletData } from "../types/wallet.type";
import { apiFetcher } from "@/lib/apiFetcher";


export const getWallet = async (): Promise<WalletData[]> => {

  const response = await apiFetcher<WalletData[]>(
    "/api/apidatos.api",
    "Error obteniendo datos de billeteras"
  );

  return response;

}