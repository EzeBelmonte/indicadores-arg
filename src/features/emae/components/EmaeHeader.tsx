import {
  Information,
} from "@/components";


const EmaeHeader = () => {

  return (

    <div 
      className="flex justify-between items-center"
    >
      <h1>Emae</h1>
      <Information title="Información sobre los datos de pobreza e indigencia">
        <div className="flex flex-col gap-3">

          <h2 className="text-black">¿Qué es el EMAE?</h2>

          <p>
            El EMAE (Estimador Mensual de Actividad Económica) es un indicador que publica el INDEC y 
            que permite conocer cómo evoluciona la actividad económica de Argentina mes a mes. 
            Se utiliza para anticipar si la economía está creciendo o contrayéndose, 
            sin tener que esperar a que se publique el PBI trimestral.
            <a href="https://sitioanterior.indec.gob.ar/nivel4_default.asp?id_tema_1=3&id_tema_2=9&id_tema_3=48">
              Más información
            </a>
          </p>

          <div className="border-1 border-black/30 my-7" />

          <div className="w-[98%] ml-auto mt-6">
            <h2 className="text-black">¿Cómo funciona?</h2>

            <p>
              El EMAE mide la evolución de la actividad de distintos sectores de la economía, como la industria, 
              el comercio, la construcción, la agricultura y los servicios.
            </p>

            <p>Por ejemplo, imaginá que durante un mes:</p>

            <ul className="my-2 indent-3">
              <li><span className="font-black">-</span> Las fábricas producen más.</li>
              <li><span className="font-black">-</span> Los comercios venden más.</li>
              <li><span className="font-black">-</span> La construcción aumenta su actividad.</li>
            </ul>

            <p>
              En conjunto, estos movimientos podrían reflejar un aumento de la actividad económica. 
              Si sucede lo contrario en muchos sectores, el indicador podría mostrar una caída.
            </p>
          </div>

        </div>
      </Information>
    </div>
  );
}

export default EmaeHeader;