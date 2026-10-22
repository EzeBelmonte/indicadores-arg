import { 
  useMonthlyInflation,
  useYearOnYearInflation,
} from "../hooks";

import { 
  Section,
} from "@/components";
import InflationHeader from "./InflationHeader";
import InflationMonthly from "./InflationMonthly";
import InflationYearOnYear from "./InflationYearOnYear";


const InflationSection = () => {
  // ==================== Estados
  const {
    data: monthlyInflation,
    isPending: monthlyPending,
    error: monthlyError,
  } =  useMonthlyInflation();

  const {
    data: yearOnYearInflation,
    isPending: yearOnYearPending,
    error: yearOnYearError,
  } =  useYearOnYearInflation();


  return (

    <Section>
      <InflationHeader />

      <div className="grid grid-cols-1 gap-3 semitablet:grid-cols-2">
        {/* Riesgo país actual */}
        <div>
          {monthlyPending && <p>Cargando...</p> }
          {monthlyError && <p>Error: monthlyError.message</p>}
          {!monthlyInflation 
            ? ( <p>No hay datos actuales de la inflación mensual</p> )
            : (
              <InflationMonthly
                data={monthlyInflation}
              />
          )}
        </div>

        {/* Riesgo país día anterior */}
        <div>
          {yearOnYearPending && <p>Cargando...</p> }
          {yearOnYearError && <p>Error: yearOnYearError.message</p>}
          {!yearOnYearInflation 
            ? ( <p>No hay datos actuales del riesgo país</p> )
            : (
              <InflationYearOnYear
                data={yearOnYearInflation}
              />
          )}
        </div>
      </div>
      
    </Section>

  );
}

export default InflationSection;