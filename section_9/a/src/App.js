import logo from "./assets/investment-calculator-logo.png";
import Form from "./components/Form";
import { useState } from "react";
import InvestmentTable from "./components/InvestmentTable";

function App() {
  const [savingsData, setSavingsData] = useState([]);

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <Form onSaveSavingsData={setSavingsData}/>
      <InvestmentTable items={savingsData}/>
    </div>
  );
}

export default App;
