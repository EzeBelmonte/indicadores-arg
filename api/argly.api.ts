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

    if (parameter === "true") {
      url += "?anterior=true";
    }

    const response = await fetchExternal<CountryRiskData>(url, "Error consultando la API externa");

    if (!response) {
      return res.status(502).json({
        error: "No se obtuvo datos de argly",
      });
    }

    // Si quisiera mostrar las fechas del dia actual y el anterior:
    // Como tanto para el riesgo país actual como para el dia anterior devuelve la misma fecha,
    // si anterior = true le restamos un día
    /*const formattedData = {
      ultimo: response.data.ultimo,
      fecha: (() => {
        if (parameter !== "true") {
          return response.data.fecha;
        }

        const [year, month, day] = response.data.fecha
          .slice(0, 10)
          .split("-")
          .map(Number);

        const fecha = new Date(Date.UTC(year, month - 1, day));
        fecha.setUTCDate(fecha.getUTCDate() - 1);

        return fecha.toISOString().slice(0, 10);
      })(),
    };*/

    // Como solamente quiero mostrar la fecha del valor actual, lo hago de esta manera
    const formattedData = {
      ultimo: response.data.ultimo,
      fecha: (() => {
        if (parameter !== "true") {
          return response.data.fecha
        }

        return "";
      })(),
    }

    return sendResponse(res, formattedData);


  } catch (error) {
    
    return res.status(500).json({
      error: "Error consultando argly",
      detail: error instanceof Error ? error.message : error,
    });

  }
}