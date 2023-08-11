import { useContext, useState } from "react";
import { CalculatorContext } from "../contexts/Calculator.context";

const Controller: React.FunctionComponent = () => {
  const [isBillValid, setIsBillValid] = useState(true);
  const [isNumPeopleValid, setIsNumPeopleValid] = useState(true);
  const [activeButton, setActiveButton] = useState(0);

  const tipOptions = [
    { label: "5%", value: 0.05 },
    { label: "10%", value: 0.1 },
    { label: "15%", value: 0.15 },
    { label: "25%", value: 0.25 },
    { label: "50%", value: 0.5 },
    { label: "Custom", value: 0 },
  ];

  const {
    bill,
    numberOfPeople,
    handleBillChange,
    handleTipChange,
    handleNumberOfPeopleChange,
  } = useContext(CalculatorContext);

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();

    const value = Number(event.target.value);
    const name = event.target.name;

    if (name === "bill") {
      validateNum(value, setIsBillValid, handleBillChange);
    }

    if (name === "numberOfPeople") {
      validateNum(value, setIsNumPeopleValid, handleNumberOfPeopleChange);
    }
  };

  const validateNum = (
    value: number,
    validator: Function,
    setter: Function
  ): void => {
    if (value <= 0) {
      validator(false);
      setter(0);
      return;
    }

    validator(true);
    setter(value);
  };

  const handleSelectedButton = (value: number): void => {
    setActiveButton(value);
    handleTipChange(value);
  };

  const handleCustomTip = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = Number(event.target.value);
    setActiveButton(value);
    handleTipChange(value / 100);
  };

  const renderTipButtons = (): JSX.Element[] => {
    return tipOptions.map((tipPercentage) => {
      // Se tipPercentage.label for "Custom", renderiza um input para
      // adicionar valor customizado
      if (tipPercentage.label === "Custom") {
        return (
          <input
            key={tipPercentage.label}
            type="number"
            placeholder="Custom"
            className="btn-custom"
            onChange={handleCustomTip}
          />
        );
      }

      return (
        <button
          key={tipPercentage.label}
          type="button"
          className={`btn-primary  ${
            activeButton === tipPercentage.value
              ? "bg-light-grayish-cyan-200 text-very-dark-cyan"
              : ""
          }`}
          onClick={() => handleSelectedButton(tipPercentage.value)}
        >
          {tipPercentage.label}
        </button>
      );
    });
  };

  return (
    <section className="flex flex-col gap-6">
      <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
        <label className="mb-1 text-2xl font-bold text-dark-grayish-cyan-200  md:text-xl lg:text-sm">
          Bill
        </label>
        <input
          value={bill ?? ""}
          name="bill"
          type="number"
          onChange={inputHandler}
          placeholder="$"
          className={`input ${isBillValid ? "" : "border border-red-400"}`}
        />
        {!isBillValid && (
          <span className="text-bold text-xs text-red-400">
            Cannot be zero or lower
          </span>
        )}
      </form>

      <div>
        <p className="mb-2 text-2xl font-bold text-dark-grayish-cyan-200 md:text-xl lg:text-sm">
          Select Tip %
        </p>
        <div className="grid grid-cols-2 gap-5 text-3xl md:grid-cols-3 md:gap-2 md:text-xl lg:text-sm">
          {renderTipButtons()}
        </div>
      </div>

      <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
        <label className="mb-1 rounded-md text-2xl font-bold text-dark-grayish-cyan-200 md:text-xl lg:text-sm">
          Number of People
        </label>
        <input
          value={numberOfPeople ?? ""}
          name="numberOfPeople"
          type="number"
          onChange={inputHandler}
          placeholder="👤"
          className={`input ${isNumPeopleValid ? "" : "border border-red-400"}`}
        />
        {!isNumPeopleValid && (
          <span className="text-bold text-xs text-red-400">
            Cannot be zero or lower
          </span>
        )}
      </form>
    </section>
  );
};

export default Controller;
