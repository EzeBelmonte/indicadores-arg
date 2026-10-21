import type { VercelRequest, VercelResponse } from '@vercel/node';
import {
  fetchExternal,
  sendResponse
} from "./sources/utils";

import { walletNames } from "./sources/constants/walletNames";

interface WalletData {
  alias: string;
  fuente: string;
  tna: number;
  reference_day: string;
}


export default async function handler(
  _req: VercelRequest,
  res: VercelResponse
) {

  try {

    const url = "https://apidatos.com/route/resumen-tna";
    
    const response = await fetchExternal<WalletData[]>(
      url,
      "Error consultando la API externa"
    )


    // Darle formato a la respuesta
    const formattedData = response.map((wallet) => ({
      alias: walletNames[wallet.alias] ?? wallet.alias,
      fuente: wallet.fuente,
      tna: wallet.tna,
      updatedAt: wallet.reference_day,
    }));

    sendResponse(res, formattedData);

  } catch (error) {
    
    return res.status(500).json({
      error: "Error consultando dolarApi",
      detail: error instanceof Error ? error.message : error,
    });

  }

}