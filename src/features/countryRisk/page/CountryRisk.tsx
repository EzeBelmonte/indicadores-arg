import CountryRiskSection from "../components/CountryRiskSection";

import {
  useCountryRisk,
  usePreviousCountryRisk,
} from "../hooks";

const CountryRisk = () => {
  // ==================== Estados
    const countryRisk = useCountryRisk();
    const previousCountryRisk = usePreviousCountryRisk();

  return (

    <div className="grid grid-cols-1 semitablet:grid-cols-2 semitablet:gap-7">
      <CountryRiskSection 
        dataQuery={countryRisk}
        title="Riesgo país" 
      />

      <CountryRiskSection 
        dataQuery={previousCountryRisk}
        title="Último riesgo país"
      />
    </div>

  );
}

export default CountryRisk;