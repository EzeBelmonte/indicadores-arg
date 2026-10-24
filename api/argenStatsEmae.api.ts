import type { VercelRequest, VercelResponse } from '@vercel/node';
import {
  fetchExternal,
  sendResponse,
} from "./sources/utils";


export default async function handler(
  _req: VercelRequest,
  res: VercelResponse
) {
  try {
    
    const url = "https://argenstats.com/api/v1/economic-activity?view=current"

    const response = await fetchExternal(url, "Error consultando API externa", {
      headers: {
        'x-api-key': process.env.ARGENSTATS_API_KEY as string,
      }
    });

    return sendResponse(res, response);

  } catch (error) {
    
    return res.status(500).json({
      error: "Error consultando ArgenStats",
      detail: error instanceof Error ? error.message : error,
    });

  }
}