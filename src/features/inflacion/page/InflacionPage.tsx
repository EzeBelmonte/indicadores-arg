import { 
  useInflacionMensual,
  useInflacionInteranual,
} from "../hooks";

import InflacionSection from "../components/InflacionSection";

const InflacionPage = () => {
  // ==================== Estados
  const ipcMensual = useInflacionMensual();
  const ipcInteranual = useInflacionInteranual();


  

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

export default InflacionPage;