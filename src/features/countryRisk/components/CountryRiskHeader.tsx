import { Information } from "@/components";


const CountryRiskHeader = () => {

  return (

    <div 
      className="flex justify-between items-center"
    >
      <h1>Riesgo país</h1>
      <Information 
        title="Información sobre el dólar en Argentina"
      >
        <div className="w-full flex flex-col gap-3">
          <h2 className="text-black">¿Qué es el riesgo país?</h2>

          <p>
            Es un indicador financiero que mide la sobretasa de rendimiento que el mercado 
            exige por la deuda de un país frente a bonos de referencia del Tesoro de Estados Unidos. 
            En Argentina, suele utilizarse el índice EMBI de J.P. Morgan.
          </p>

          <p>
            Cuanto mayor es el indicador, mayor es la prima de riesgo que exige el mercado para invertir en deuda argentina.
            <a href="https://perspectivas.cohen.com.ar/abc-financiero/que-es-el-riesgo-pais-y-como-se-calcula">
              Más información
            </a>
          </p>
        </div>

        <div className="max-w-[98%] ml-auto mt-6 flex flex-col gap-3">
          <h2 className="text-black">¿Qué significan los puntos básicos?</h2>

          <p>
            El riesgo país se expresa en puntos básicos (pb). 
            Cada 100 puntos básicos equivalen a un punto porcentual de diferencia en el rendimiento.
          </p>

          <p>
            Por ejemplo, 700 puntos básicos equivalen a una sobretasa de 7 puntos porcentuales, 
            no a una tasa total del 7 %. 
            <a href="https://www.iprofesional.com/finanzas/466925-riesgo-pais-salto-feroz-impacta-economia-bolsillo-argentino"> 
              Más información
            </a>
          </p>
        </div>
      </Information>
    </div>

  );
}

export default CountryRiskHeader;