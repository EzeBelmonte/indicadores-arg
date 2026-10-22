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

        <div className="border borde-1 border-black/30 my-5" />

        <div className="flex flex-col gap-9">
          {/* Variación mensual */}
          <div className="flex flex-col gap-3">
            <h2 className="text-black">Variación mensual</h2>

            <p>
              Muestra cuánto cambió el riesgo país respecto de un mes atrás. 
              Permite observar su evolución en el corto plazo.
            </p>

            <ul>
              <li>Variación positiva: el riesgo país aumentó.</li>
              <li>Variación negativa: el riesgo país disminuyó.</li>
              <li>Variación cercana a cero: se mantuvo relativamente estable.</li>
            </ul>

            <h3>Ejemplo</h3>
            <p>
              Si actualmente es de 700 puntos y hace un mes era de 650, aumentó 50 puntos básicos, 
              equivalentes a una suba del 7,69 %.
            </p>
          </div>

          {/* Variación interanual */}
          <div className="flex flex-col gap-3">
            <h2 className="text-black">Variación interanual</h2>

            <p>
              Compara el riesgo país actual con el valor de hace un año. 
              Permite identificar cambios de tendencia en un período más largo y reducir el peso de las fluctuaciones de corto plazo.
            </p>

            <h3>Ejemplo</h3>
            <p>
              Si actualmente es de 700 puntos y hace un año era de 1.000, 
              disminuyó 300 puntos básicos, equivalentes a una caída del 30 %.
            </p>
          </div>
        </div>
      </Information>
    </div>

  );
}

export default CountryRiskHeader;