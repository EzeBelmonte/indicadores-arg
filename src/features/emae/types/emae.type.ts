export interface EmaeMainData {
  general_index: number;
  monthly_variation: number;
  yearly_variation: number;
  accumulated_variation: number;
}

export interface EmaeSeasonallyAdjustedData {
  index: number;
  monthly_variation: number;
}

export interface EmaeMetaData  {
  timestamp: string;
  source: string;
  base_year: number;
}

export interface EmaeData extends EmaeMainData {
  success: boolean;
  data: {
    date: string;
    seasonally_adjusted: EmaeSeasonallyAdjustedData;
  }
  metadata: EmaeMetaData;
}
