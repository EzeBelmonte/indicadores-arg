import { Information } from "@/components";


const PovertyHeader = () => {

  return (

    <div 
      className="flex justify-between items-center"
    >
      <h1>Pobreza</h1>
      <Information title="Información sobre los datos de pobreza e indigencia">
        <div className="flex flex-col gap-3">

          <h2 className="text-black">¿Qué es la pobreza?</h2>

          <p>
            La pobreza monetaria mide qué proporción de la población vive en hogares cuyos ingresos 
            no alcanzan para cubrir el costo de una canasta básica total (CBT).
          </p>

          <p>
            Esta canasta contempla alimentos y otras necesidades esenciales, como vestimenta, transporte, salud y educación.
          </p>

          <h2 className="text-black mt-4">¿Cómo se mide?</h2>

          <p>
            Se compara el ingreso total del hogar con el valor de la canasta básica total que le corresponde según su composición.
          </p>
        </div>

        <div className="border-1 border-black/30 my-7" />
        
        <div className="flex flex-col gap-3">
          <h2 className="text-black">¿Qué es la indigencia?</h2>

          <p>
            La indigencia representa una situación de mayor vulnerabilidad económica. 
            Se considera indigente a un hogar cuyos ingresos no alcanzan para cubrir el costo de una canasta básica alimentaria (CBA), 
            que contempla los alimentos necesarios para satisfacer determinados requerimientos nutricionales.
          </p>

          <h2 className="text-black mt-4">¿Cómo se mide?</h2>

          <p>
            Se compara el ingreso total del hogar con el valor de su canasta básica alimentaria.
          </p>

          <div className="w-[98%] ml-auto mt-6">
            <h2 className="text-black">¿Cuál es la diferencia?</h2>

            <p>
              La pobreza considera las necesidades alimentarias y no alimentarias. 
              La indigencia considera únicamente el umbral de necesidades alimentarias establecido por la metodología.
            </p>

            <p>
              Por eso, los hogares indigentes también se encuentran dentro de la población pobre, pero no todos los hogares pobres son indigentes.
            </p>
          </div>
        </div>
      </Information>
    </div>

  );
}

export default PovertyHeader;