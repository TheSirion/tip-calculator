import { ReactElement, useEffect, useState } from "react";
import Card from "./components/Card";
import Console from "./components/Console";
import Control from "./components/Control";
import { calculateTip, divideByPeople } from "./utils/calculator";

const App = (): ReactElement => {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [numPeople, setNumPeople] = useState(1);

  const numberFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  useEffect(() => {
    console.log("bill state:", bill);
    // console.log("tip state:", tip);
    // console.log("numPeople state:", numPeople);
    console.log("--------------------");
  }, [bill, tip, numPeople]);

  // const handleBillChange = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ): void => {
  //   event.preventDefault();

  //   const value = numberFormat.format(parseFloat(event.target.value));
  //   // const value = parseFloat(event.target.value).toFixed(2);
  //   setBill(parseFloat(value));
  // };

  const handleBillChange = (value: number): void => {
    setBill(value);
  };

  const handleTipChange = (tipPercentage: number): void => {
    setTip(tipPercentage);
  };

  const handleNumPeopleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    event.preventDefault();
    const value = event.target.value;
    if (Number.isNaN(parseInt(value, 10))) {
      setNumPeople(0);
    } else {
      setNumPeople(parseInt(value, 10));
    }
  };

  const reset = (): void => {
    setBill(0);
    setTip(0);
    setNumPeople(0);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-light-grayish-cyan-200">
      <div className="mb-[2.75em] font-bold tracking-[.4em] text-dark-grayish-cyan-200">
        <h1>SPLI</h1>
        <h1>TTER</h1>
      </div>
      <Card>
        <Control
          bill={bill}
          numPeople={numPeople}
          handleBillChange={handleBillChange}
          handleTipChange={handleTipChange}
          handleNumPeopleChange={handleNumPeopleChange}
        />
        <Console
          tipAmount={calculateTip(bill, tip, numPeople)}
          total={divideByPeople(bill, tip, numPeople)}
          reset={reset}
        />
      </Card>
    </div>
  );
};

export default App;
