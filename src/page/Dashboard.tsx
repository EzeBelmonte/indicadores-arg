import {
  DollarPage,
  InflationPage,
  CountryRisk,
} from "../features";

const Dashboard = () => {

  return (
    <main className="w-full max-w-[1000px] mx-auto px-2">
      
      <DollarPage />
      <InflationPage />
      <CountryRisk />
    </main>
  );
}

export default Dashboard;