import {
  Section,
} from "@/components";
import WalletHeader from "./WalletHeader";
import WalletCard from "./WalletCard";

import type { WalletData } from "../types/wallet.type";

type Props = {
  data: WalletData[];
}


const WalletSecction = ({ data }: Props) => {

  return (

    <Section>
      <WalletHeader />

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