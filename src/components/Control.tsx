import React, { ChangeEventHandler } from "react";

interface ControlProps {
  bill: number;
  numPeople: number;
  handleBillChange: ChangeEventHandler<HTMLInputElement>;
  handleTipChange: (value: number) => void;
  handleNumPeopleChange: ChangeEventHandler<HTMLInputElement>;
}

const Control: React.FunctionComponent<ControlProps> = ({
  bill,
  numPeople,
  handleBillChange,
  handleNumPeopleChange,
  handleTipChange,
}) => {
  return (
    <div className="flex flex-col gap-6">
      <form className="flex flex-col">
        <label className="mb-1 text-sm font-bold text-dark-grayish-cyan-200">
          Bill
        </label>
        <input
          value={bill.toFixed(2)}
          type="number"
          onChange={handleBillChange}
          placeholder="0"
          className="rounded bg-light-grayish-cyan-100 p-1 text-right font-bold text-very-dark-cyan"
        />
      </form>

      <div>
        <p className="mb-2 text-sm font-bold text-dark-grayish-cyan-200">
          Select Tip %
        </p>
        <div className="grid grid-cols-3 grid-rows-2 gap-2">
          <button className="btn-primary" onClick={() => handleTipChange(0.05)}>
            5%
          </button>
          <button className="btn-primary" onClick={() => handleTipChange(0.1)}>
            10%
          </button>
          <button className="btn-primary" onClick={() => handleTipChange(0.15)}>
            15%
          </button>
          <button className="btn-primary" onClick={() => handleTipChange(0.25)}>
            25%
          </button>
          <button className="btn-primary" onClick={() => handleTipChange(0.5)}>
            50%
          </button>
          <button className="btn-secondary">Custom</button>
        </div>
      </div>

      <form className="flex flex-col">
        <label className="mb-1 rounded-md text-sm font-bold text-dark-grayish-cyan-200">
          Number of People
        </label>
        <input
          value={numPeople}
          type="number"
          onChange={handleNumPeopleChange}
          placeholder="0"
          className="rounded bg-light-grayish-cyan-100 p-1 text-right font-bold text-very-dark-cyan"
        />
      </form>
    </div>
  );
};

export default Control;
