import { 
  Information,
} from "@/components";

const InflationHeader = () => {

  return (

      <div 
        className="flex justify-between items-center"
      >
        <h1>Inflación</h1>
        <Information 
          title="Información sobre la inflación en Argentina"
        >
          <div>
            <div>
              <div className="flex flex-col gap-3">
                <h2 className="text-black">¿Qué es la inflación?</h2>

                <p>
                  La inflación es el aumento generalizado de los precios de los bienes y servicios de una economía a lo largo del tiempo. 
                  En Argentina, el INDEC utiliza el Índice de Precios al Consumidor (IPC) para medir cómo varían 
                  los precios de una canasta representativa del consumo de los hogares.
                </p>
              </div>

              <div className="border-1 border-black/30 my-7" />
              
              <div className="flex flex-col gap-3">
                <h2 className="text-black">Inflación mensual</h2>

                <p>
                  Indica cuánto variaron los precios respecto del mes inmediatamente anterior. 
                  Permite observar la evolución más reciente del nivel general de precios.
                </p>

                <div className="w-[98%] ml-auto">
                  <h3 className="font-semibold">Ejemplo</h3>

                  <p>
                    Si la inflación mensual es del 2 %, 
                    significa que el nivel de precios medido por el IPC aumentó un 2 % respecto del mes anterior.
                  </p>
                </div>
              </div>

              <div className="border-1 border-black/30 my-7" />

              <div className="flex flex-col gap-3">
                <h2 className="text-black">Inflación interanual</h2>

                <p>
                  Mide cuánto varió el nivel de precios respecto del mismo mes del año anterior. Por ejemplo, 
                  la inflación interanual de octubre compara el IPC de octubre de este año con el de octubre del año pasado.
                </p>

                <div className="w-[98%] ml-auto">
                  <h3 className="font-semibold">Ejemplo</h3>

                  <p>
                    Si la inflación interanual es del 30 %, 
                    significa que el nivel general de precios aumentó un 30 % en los últimos doce meses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Information>
      </div>


  );
}

export default InflationHeader;