export interface PovertyIndicator {
  gap: number | null;
  households: number;
  persons: number;
  severity: number | null;
}

export interface PovertyData {
  region: string;
  dataType: string;
  date: string;
  period: string;
  year: number;
  semester: number;
  lastUpdate: string;
  poverty: PovertyIndicator;
  indigence: PovertyIndicator;
  variableName: string | null;
  variableValue: number | null;
};