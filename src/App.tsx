import './css/App.css'

import {
  Buttonbar,
  Navbar,
  Dashboard,
  Footer,
} from "./layout";

function App() {

  return (
    <div className="w-full min-h-screen">
      <Buttonbar />

      <Navbar />

      <Dashboard />
    
      <Footer />
    </div>
  )
}

export default App
