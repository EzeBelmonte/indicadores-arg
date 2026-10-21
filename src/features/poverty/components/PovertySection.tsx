import { Section, ModalInfo } from "@/components";
import PovertyCard from "./PovertyCard";

import type { 
  PovertyData,
} from "../types/poverty.type";

type Props = {
  data: PovertyData;
}


const PovertySection = ({
  data,
}: Props) => {

  let semester = data.semester == 1 ? "Primer" : "Segundo";
  semester += ` semestre de ${data.year}`;

  return (

    <Section>
      <div 
        className="flex justify-between items-center"
      >
        <h1>Pobreza</h1>
        <ModalInfo title="Información sobre los datos de pobreza e indigencia" />
      </div>

      <div className="flex flex-col gap-3">
        <PovertyCard 
          data={data.poverty}
          title="Pobreza"
          semester={semester}
        />

        <PovertyCard 
          data={data.indigence}
          title="Indigencia"
          semester={semester}
        />
      </div>
    </Section>

  );
}

export default PovertySection;