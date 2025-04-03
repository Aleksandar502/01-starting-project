import { useState } from "react";
import InputGroup from "./components/InputGroup";
import Result from "./components/result";
function App() {
  const [investmentInfo, setInvestmentInfo] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });
  const handleInvestmentInfoChange = (fieldName, value) => {
    setInvestmentInfo((prevInfo) => ({
      ...prevInfo,
      [fieldName]: value,
    }));
  };
  return (
    <>
      <div id="user-input" className="input-group">
        <InputGroup
          onInvestmentInfoChange={handleInvestmentInfoChange}
          name={"initialInvestment"}
          type={"number"}
        />
        <InputGroup
          onInvestmentInfoChange={handleInvestmentInfoChange}
          name={"annualInvestment"}
          type={"text"}
        />
        <InputGroup
          onInvestmentInfoChange={handleInvestmentInfoChange}
          name={"expectedReturn"}
          type={"text"}
        />
        <InputGroup
          onInvestmentInfoChange={handleInvestmentInfoChange}
          name={"duration"}
          type={"text"}
        />
      </div>
      <Result investmentObject={investmentInfo} />
    </>
  );
}

export default App;
