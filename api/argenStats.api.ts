import type { VercelRequest, VercelResponse } from '@vercel/node';
import {
  fetchExternal,
  sendResponse,
} from "./sources/utils";

interface PovertyStatsData {
  dataType: string,
  date: string,
  indigence: {
    households: number,
    persons: number,
  }
  poverty: {
    households: number,
    persons: number,
    }
  region: string,
  semester: number,
  year: number,
  lastUpdate: string,
  period: string,
}
interface PovertyData {
  success: boolean;
  data: PovertyStatsData[];
}


export default async function handler(
  _req: VercelRequest,
  res: VercelResponse
) {
  try {
    
    const url = "https://argenstats.com/api/v1/poverty?view=current"

    const response = await fetchExternal<PovertyData>(url, "Error consultando API externa", {
      headers: {
        'x-api-key': process.env.ARGENSTATS_API_KEY as string,
      }
    });

    // Obtenemos la primer ocurrencia donde dataType:"national", ya que es el valor actual a nuvel nacional
    const nationalData = response.data.find(
      (item) => item.dataType === "national"
    );

    return sendResponse(res, nationalData);

  } catch (error) {
    
    return res.status(500).json({
      error: "Error consultando ArgenStats",
      detail: error instanceof Error ? error.message : error,
    });

  }
}