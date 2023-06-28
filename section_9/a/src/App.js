import logo from "./assets/investment-calculator-logo.png";
import Form from "./components/Form";
import { useState } from "react";
import InvestmentTable from "./components/InvestmentTable";

function App() {
  const [savingsData, setSavingsData] = useState([]);
  const [resetTable, setResetTable] = useState(false);
  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <Form onSaveSavingsData={setSavingsData} onResetTable={setResetTable}/>
      <InvestmentTable items={savingsData} resetTable={resetTable}/>
    </div>
  );
}

export default App;
