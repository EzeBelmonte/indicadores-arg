import { Section, ModalInfo, Card } from "@/components";

import type { 
  PovertyIndicator,
} from "../types/poverty.type";

type Props = {
  data: PovertyIndicator;
  title: string;
  semester: number;
  year: number;
}


const PovertySection = ({
  data,
  title,
  semester,
  year,
}: Props) => {

  let semestre = semester == 1 ? "Primer" : "Segundo";
  semestre += ` semestre de ${year}`;

  return (

    <Section>
      <div 
        className="flex justify-between items-center"
      >
        <h1>{title}</h1>
        <ModalInfo title={`Información sobre los datos de ${title.toLocaleLowerCase()}`} />
      </div>

      <Card className="flex flex-col gap-5 justify-around items-center semitablet:flex-row">
        <div className="flex flex-col items-center">
          <h2>Hogares bajo la línea de {title.toLowerCase()}</h2>

          <p className="text-cyan-600 text-[2.2rem] font-semibold my-3">
            {data.households}%
          </p>

          <p className="text-white text-[.85rem]">{semestre}</p>
        </div>

        <div className="flex flex-col items-center">
          <h2>Población bajo la línea de {title.toLowerCase()}</h2> 

          <p className="text-cyan-600 text-[2.2rem] font-semibold my-3">
            {data.persons}%
          </p>

          <p className="text-white text-[.85rem]">{semestre}</p>
        </div>
      </Card>
    </Section>

  );
}

export default PovertySection;