import { useContext, useState } from "react";
import { CalculatorContext } from "../contexts/Calculator.context";

const Control: React.FunctionComponent = () => {
  const [isNumPeopleValid, setIsNumPeopleValid] = useState(true);

  const tipOptions = [
    { label: "5%", value: 0.05 },
    { label: "10%", value: 0.1 },
    { label: "15%", value: 0.15 },
    { label: "25%", value: 0.25 },
    { label: "50%", value: 0.5 },
  ];

  const {
    bill,
    numberOfPeople,
    handleBillChange,
    handleTipChange,
    handleNumberOfPeopleChange,
  } = useContext(CalculatorContext);

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = Number(event.target.value);
    const name = event.target.name;

    if (name === "bill") {
      handleBillChange(value);
    } else if (name === "numberOfPeople") {
      if (!validateNumPeople(value)) {
        handleNumberOfPeopleChange(0);
      }
      handleNumberOfPeopleChange(value);
    }
  };

  const validateNumPeople = (value: number): boolean => {
    if (value <= 0) {
      setIsNumPeopleValid(false);
      return false;
    }
    setIsNumPeopleValid(true);
    return true;
  };

  return (
    <div className="flex flex-col gap-6">
      <form className="flex flex-col">
        <label className="mb-1 text-sm font-bold text-dark-grayish-cyan-200">
          Bill
        </label>
        <input
          value={bill ?? ""}
          name="bill"
          type="number"
          onChange={inputHandler}
          placeholder="$ 0"
          className="rounded bg-light-grayish-cyan-100 p-1 text-right font-bold text-very-dark-cyan"
        />
      </form>

      <div>
        <p className="mb-2 text-sm font-bold text-dark-grayish-cyan-200">
          Select Tip %
        </p>
        <div className="grid grid-cols-3 grid-rows-2 gap-2">
          {tipOptions.map((tip) => (
            <button
              key={tip.label}
              className="btn-primary"
              onClick={() => handleTipChange(tip.value)}
            >
              {tip.label}
            </button>
          ))}
          <button className="btn-secondary">Custom</button>
        </div>
      </div>

      <form className="flex flex-col">
        <label className="mb-1 rounded-md text-sm font-bold text-dark-grayish-cyan-200">
          Number of People
        </label>
        {!isNumPeopleValid && (
          <span className="text-xs text-red-500">Cannot be zero</span>
        )}
        <input
          value={numberOfPeople ?? ""}
          name="numberOfPeople"
          type="number"
          onChange={inputHandler}
          placeholder="0"
          className={`rounded border-2 bg-light-grayish-cyan-100 p-1 text-right font-bold text-very-dark-cyan ${
            isNumPeopleValid ? "" : "invalid:border-red-500"
          }`}
        />
      </form>
    </div>
  );
};

export default Control;
