export interface BaseCountryRiskData {
  ultimo: number;
  fecha: string;
}


// Por el momento no los uso
export interface CountryRiskData extends BaseCountryRiskData {
  variacion: number;
  tendencia: string;
}

export interface PreviousCountryRiskData extends BaseCountryRiskData {
  variacion_puntos: number;
}