import {
  DolarPage,
  InflacionPage,
} from "../features";

const Dashboard = () => {

  return (
    <main className="w-full max-w-[1000px] mx-auto px-2">
      
      <DolarPage />
      <InflacionPage />
      
    </main>
  );
}

export default Dashboard;