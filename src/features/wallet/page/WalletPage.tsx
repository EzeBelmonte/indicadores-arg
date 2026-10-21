import { useWallet } from "../hooks/useWallet";

import WalletsSection from "../components/WalletSection";


const WalletPage = () => {
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
    
    <WalletsSection 
      data={data}
    />

  );
}

export default WalletPage;