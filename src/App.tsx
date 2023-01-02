import { ReactElement, useState } from "react";
import Card from "./components/Card";
import Console from "./components/Console";
import Control from "./components/Control";

const App = (): ReactElement => {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(0);
  const [numPeople, setNumPeople] = useState(0);

  const handleBillChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    event.preventDefault();
    const value = parseInt(event.target.value, 10);
    // const formattedValue = new Intl.NumberFormat("en-US", {
    //   style: "currency",
    //   currency: "USD",
    // }).format(value);

    setBill(value.toFixed(2));
    console.log(value.toFixed(2));
  };

  const handleTipChange = (tipPercentage: number): void => {
    setTip(tipPercentage);
    console.log(tip);
  };

  const handleNumPeopleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    event.preventDefault();
    setNumPeople(parseInt(event.target.value));
    console.log(numPeople);
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
        <Console />
      </Card>
    </div>
  );
};

export default App;
