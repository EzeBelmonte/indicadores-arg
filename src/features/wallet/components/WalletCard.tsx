import { 
  Card,
  Image,
} from "@/components";
import { walletLogo } from "../constants/walletLogo";
import { 
  percentFormatter,
  formatNormalDate,
  normalizedName,
} from "@/helpers";

import type { WalletData } from "../types/wallet.type";

type Props = {
  data: WalletData;
}


const WalletCard = ({ data }: Props) => {
  // Nombre normalizado
  const formattedName = normalizedName(data.alias) as keyof typeof walletLogo;

  const logo = walletLogo[formattedName]?.logo;

  return (

    <Card className="flex flex-col items-center">
      {logo && 
        <Image 
          src={logo}
          alt={data.alias}
          className="w-[80%] rounded"
        />
      }

      <div className="flex items-baseline gap-2 mt-1 mb-4">
        <p className="key">ANUAL:</p> 
        <p className="value">{percentFormatter(data.tna)}%</p>
      </div>

      <p className="text-gray-500 text-[.7rem] ms-auto">Actualización: {formatNormalDate(data.updatedAt)}</p>
    </Card>

  );
}

export default WalletCard;