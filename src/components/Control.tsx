import React, { ChangeEventHandler } from "react";

interface ControlState {
  bill: string;
  numPeople: number;
  handleBillChange: ChangeEventHandler<HTMLInputElement>;
  handleTipChange: Function;
  handleNumPeopleChange: ChangeEventHandler<HTMLInputElement>;
}

const Control: React.FunctionComponent<ControlState> = ({
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
          value={bill}
          onChange={handleBillChange}
          type="text"
          placeholder="0"
          className="rounded bg-light-grayish-cyan-100 p-1 text-right font-bold text-very-dark-cyan"
        />
      </form>

      <div>
        <p className="mb-2 text-sm font-bold text-dark-grayish-cyan-200">
          Select Tip %
        </p>
        <div className="grid grid-cols-3 grid-rows-2 gap-2">
          <button className="btn-primary" onClick={() => handleTipChange(5)}>
            5%
          </button>
          <button className="btn-primary" onClick={() => handleTipChange(10)}>
            10%
          </button>
          <button className="btn-primary" onClick={() => handleTipChange(15)}>
            15%
          </button>
          <button className="btn-primary" onClick={() => handleTipChange(25)}>
            25%
          </button>
          <button className="btn-primary" onClick={() => handleTipChange(50)}>
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
          onChange={() => handleNumPeopleChange}
          type="text"
          placeholder="0"
          className="rounded bg-light-grayish-cyan-100 p-1 text-right font-bold text-very-dark-cyan"
        />
      </form>
    </div>
  );
};

export default Control;
