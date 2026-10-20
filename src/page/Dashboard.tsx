import {
  DollarPage,
  InflationPage,
  CountryRisk,
  Poverty,
} from "../features";

const Dashboard = () => {

  return (
    <main className="w-full max-w-[1000px] mx-auto px-2">
      
      <DollarPage />
      <InflationPage />
      <CountryRisk />
      <Poverty />

    </main>
  );
}

export default Dashboard;