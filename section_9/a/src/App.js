import logo from "./assets/investment-calculator-logo.png";
import Form from "./components/Form";
import { useState } from "react";
import InvestmentTable from "./components/InvestmentTable";

function App() {
  const [savingsData, setSavingsData] = useState([]);

  const saveSavingsDataHandler = (savingsData) => {
    setSavingsData((prevSavingsData) => {
      return [savingsData, ...prevSavingsData];
    });
  };

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <Form onSaveSavingsData={saveSavingsDataHandler}/>
      <InvestmentTable items={savingsData}/>
    </div>
  );
}

export default App;
