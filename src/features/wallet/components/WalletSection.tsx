import { useWallet } from "../hooks/useWallet";

import {
  Section,
} from "@/components";
import WalletHeader from "./WalletHeader";
import WalletCard from "./WalletCard";


const WalletSecction = () => {
  // ==================== Estados
  const {
    data,
    isPending,
    error,
  } = useWallet();

  // ==================== Respuestas del hook
  // Esperando la respuesta
  if (isPending) {
    return <p>Cargando...</p>
  }

  // En caso de error
  if (error) {
    return <p>Error: {error.message}</p>
  }

  // En caso de no haber datos
  if (!data) {
    return <p>No hay datos de los precios del dólar</p>
  }

  return (

    <Section id="billeteras">
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