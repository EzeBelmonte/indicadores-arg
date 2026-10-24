import {
  DollarPage,
  InflationPage,
  CountryRiskPage,
  PovertyPage,
  WalletPage,
} from "../features";

const Dashboard = () => {

  return (
    <main className="w-full max-w-[1000px] mx-auto px-2">
      
      <DollarPage />
      <InflationPage />
      <CountryRiskPage />
      <PovertyPage />
      <WalletPage />
      
    </main>
  );
}

export default Dashboard;