import {
  useCountryRisk,
  usePreviousCountryRisk,
} from "../hooks";

import { 
  Section,
} from "@/components";
import CountryRiskHeader from "./CountryRiskHeader";
import CountryRiskCard from "./CountryRiskCard";


const CountryRiskSection = () => {
  // ==================== Estados
  const {
    data: currentRisk,
    isPending: currentPending,
    error: currentError,
  } =  useCountryRisk();

  const {
    data: previousRisk,
    isPending: previousPending,
    error: previousError,
  } =  usePreviousCountryRisk();

  return (

    <Section>
      <CountryRiskHeader />

      <div className="grid grid-cols-1 gap-3 semitablet:grid-cols-2">
        {/* Riesgo país actual */}
        <div>
          {currentPending && <p>Cargando...</p> }
          {currentError && <p>Error: currentError.message</p>}
          {!currentRisk 
            ? ( <p>No hay datos actuales del riesgo país</p> )
            : (
              <CountryRiskCard
                data={currentRisk}
              />
          )}
        </div>

        {/* Riesgo país día anterior */}
        <div>
          {previousPending && <p>Cargando...</p> }
          {previousError && <p>Error: previousError.message</p>}
          {!previousRisk 
            ? ( <p>No hay datos actuales del riesgo país</p> )
            : (
              <CountryRiskCard
                data={previousRisk}
              />
          )}
        </div>
      </div>

    </Section>

  );
}

export default CountryRiskSection;