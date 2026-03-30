import { useState } from "react";
import Input from "./components/Input";
import Result from "./components/Result";

function App() {
  let [data, setData] = useState({
    initialInvestment: null,
    annualInvestment: null,
    expectedReturn: null,
    duration: null,
  });

  function handleChange(field, value) {
    setData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  }

  return (
    <>
      <div id="user-input">
        <div className="input-group">
          <Input
            type="text"
            labelName={"Initial investment"}
            value={data.initialInvestment}
            onChange={(e) =>
              handleChange("initialInvestment", Number(e.target.value))
            }
          />
          <Input
            type="text"
            labelName={"Anual investment"}
            value={data.annualInvestment}
            onChange={(e) =>
              handleChange("annualInvestment", Number(e.target.value))
            }
          />
        </div>

        <div className="input-group">
          <Input
            type="text"
            labelName={"Expected return"}
            value={data.expectedReturn}
            onChange={(e) =>
              handleChange("expectedReturn", Number(e.target.value))
            }
          />
          <Input
            type="text"
            labelName={"Duration"}
            value={data.duration}
            onChange={(e) => handleChange("duration", Number(e.target.value))}
          />
        </div>
      </div>

      <Result data={data} />
    </>
  );
}

export default App;
