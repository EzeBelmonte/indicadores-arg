import type { VercelRequest, VercelResponse } from "@vercel/node";
import {
  fetchExternal,
  sendResponse,
} from "./sources/utils";

export default async function handler(
  _req: VercelRequest,
  res: VercelResponse
) {
  
  try {
    
    const url = "https://dolarapi.com/v1/dolares";
    const data = await fetchExternal(url, "Error consultando la API externa");

    return sendResponse(res, data);

  } catch (error) {
    
    return res.status(500).json({
      error: "Error consultando dolarApi",
      detail: error instanceof Error ? error.message : error,
    });

  }
}