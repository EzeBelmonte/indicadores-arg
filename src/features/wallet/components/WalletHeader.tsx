import { Information } from "@/components";


const WalletHeader = () => {

  return (

    <div
      className="flex justify-between items-center"
    >
      <h1>Billeteras</h1>
      <Information title="Información sobre las billeteras">
        <div className="flex flex-col gap-3">
          <h2 className="text-black">¿Qué es el rendimiento anual?</h2>

          <p>
            Es una tasa expresada como porcentaje anual que sirve como referencia para estimar cuánto 
            puede rendir el dinero que mantenés en una cuenta o billetera virtual.
          </p>

          <p>
            Por ejemplo, una tasa nominal anual (TNA) del 19 % representa un rendimiento de referencia 
            equivalente al 19 % del capital durante un año, bajo el supuesto de que la tasa se mantuviera constante y 
            sin considerar capitalización.
          </p>
        </div>

        <div className="border-1 border-black/30 my-7" />
        
        <div className="flex flex-col gap-3">
          <h2 className="text-black">¿Cómo funciona?</h2>

          <p>
            Dependiendo de la entidad, el dinero puede generar rendimientos mediante una cuenta remunerada o invertirse en un fondo común de inversión (FCI), 
            como sucede con Mercado Fondo en Mercado Pago. 
            En este último caso, el rendimiento depende de los resultados de las inversiones del fondo y puede variar diariamente.
          </p>

          <h2 className="text-black mt-4">¿Cómo se generan las ganancias?</h2>

          <p>
            Si el rendimiento se calcula diariamente, el saldo puede aumentar con las ganancias obtenidas, 
            siempre que las condiciones del producto lo permitan.
          </p>

          <div className="w-[98%] ml-auto mt-6">
            <h2 className="text-black">Ejemplo ilustrativo</h2>

            <p>
              Si mantenés $100.000 con una TNA del 19 %, una estimación simple sería:
            </p>

            <ul className="my-2 indent-3">
              <li><span className="font-black">-</span> Rendimiento anual: $19.000.</li>
              <li><span className="font-black">-</span> Rendimiento mensual aproximado: $1.583.</li>
              <li><span className="font-black">-</span> Rendimiento diario aproximado: $52.</li>
            </ul>

            <p>
              Estos cálculos suponen una tasa constante y no contemplan capitalización, variaciones del rendimiento ni otras condiciones particulares.
            </p>
          </div>
        </div>
      </Information>
    </div>

  );
}

export default WalletHeader;