import type { VercelRequest, VercelResponse } from "@vercel/node";
import {
  fetchExternal,
  sendResponse,
} from "./sources/utils";

interface CountryRiskData {
  data: {
    ultimo: number;
    fecha: string;
  }
}


export default async function handle(
  req: VercelRequest,
  res: VercelResponse,
) {
  
  try {
    
    const parameter = req.query.anterior;

    let url = `https://api.argly.com.ar/v1/riesgo-pais`;

    /*if (parameter !== undefined) {
      if (typeof parameter !== "string" || !parameter.trim()) {
        return res.status(400).json({
          error: "El parámetro es obligatorio",
        });
      }
      
      url += `?${encodeURIComponent(parameter)}`;
    }*/

      if (parameter === "true") {
        url += "?anterior=true";
      }

    const response = await fetchExternal<CountryRiskData>(url, "Error consultando la API externa");

    if (!response) {
      return res.status(502).json({
        error: "No se obtuvo datos de argly",
      });
    }

    const formattedData = {
      ultimo: response.data.ultimo,
      fecha: response.data.fecha,
    };

    return sendResponse(res, formattedData);


  } catch (error) {
    
    return res.status(500).json({
      error: "Error consultando argly",
      detail: error instanceof Error ? error.message : error,
    });

  }
}