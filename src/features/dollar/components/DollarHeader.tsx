import {
  Information,
} from "@/components";

import { information } from "../constants/information";


const DollarHeader = () => {

  return (

    <div 
      className="flex justify-between items-center"
    >
      <h1>Dólar</h1>
      <Information 
        title="Información sobre el dólar en Argentina"
      >
        <div className="flex flex-col gap-7">
          {Object.entries(information).map(([key, item]) => {
            const Icon = item.icon;

            return (
              <div key={key}>
                <div className="flex items-baseline gap-1">
                  <Icon size={16} />

                  <h2 className="text-black">{item.title}</h2>
                </div>

                <p>{item.description}</p>

                <p className="text-[.9rem]">{item.note}</p>
              </div>
            );
          })}
        </div>
      </Information>
    </div>

  );
}

export default DollarHeader;