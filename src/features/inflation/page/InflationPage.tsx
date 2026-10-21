import { 
  useMonthlyInflation,
  useYearOnYearInflation,
} from "../hooks";

import InflacionSection from "../components/InflationSection";

const InflationPage = () => {
  // ==================== Estados
  const ipcMensual = useMonthlyInflation();
  const ipcInteranual = useYearOnYearInflation();

  return (

    <div className="grid grid-cols-1 semitablet:grid-cols-2 semitablet:gap-7">
      <InflacionSection 
        dataQuery={ipcMensual} 
        title="Inflación mensual"
      />
      
      <InflacionSection 
        dataQuery={ipcInteranual}
        title="Inflación interanual" 
      />
    </div>
    
  );
}

export default InflationPage;