import type { VercelRequest, VercelResponse } from "@vercel/node";
import {
  fetchExternal,
  sendResponse,
} from "./sources/utils";



export default async function handle(
  req: VercelRequest,
  res: VercelResponse,
) {
  
  try {

    const indice = req.query.indice;

    if (typeof indice !== "string" || !indice) {
      return res.status(400).json({
        error: "El parámetro indice es obligatorio",
      });
    }
    
    const url = `https://api.argentinadatos.com/v1/finanzas/indices/${encodeURIComponent(indice)}`;
    const data = await fetchExternal(url, "Error consultando la API externa");

    // Validar los datos obtenidos
    if (!Array.isArray(data)) {
      return res.status(502).json({
        error: "La API externa no devolvió un arreglo válido",
      });
    }

    // Limitar la cantidad de indices, desde la fecha actual hasta 60 meses atrás
    const fechaLimite = new Date();
    fechaLimite.setMonth(fechaLimite.getMonth() - 60);

    const datosFiltrados = data.filter(
      (item: { fecha: string; valor: number }) =>
        new Date(`${item.fecha}T00:00:00`) >= fechaLimite
    );

    return sendResponse(res, datosFiltrados);

  } catch (error) {
    
    return res.status(500).json({
      error: "Error consultando argentinaDatos",
      detail: error instanceof Error ? error.message : error,
    });

  }

}