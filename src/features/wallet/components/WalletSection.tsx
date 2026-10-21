import {
  Section,
  Information,
} from "@/components";
import WalletCard from "./WalletCard";

import type { WalletData } from "../types/wallet.type";

type Props = {
  data: WalletData[];
}


const WalletSecction = ({ data }: Props) => {

  return (

    <Section>
      <div
        className="flex justify-between items-center"
      >
        <h1>Billeteras</h1>
        <Information title="Información sobre las billeteras" />
      </div>

      <div className="
        grid grid-cols-1 gap-3 semitablet:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
      ">
        {data.map((wallet) => (
          <WalletCard 
            key={wallet.alias}
            data={wallet} 
          />
        ))}
      </div>
    </Section>

  );
}

export default WalletSecction;