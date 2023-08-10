import { useContext } from "react";

import { CalculatorContext } from "../contexts/Calculator.context";

const Console: React.FunctionComponent = () => {
  const { bill, tip, numberOfPeople, total, resetValues } =
    useContext(CalculatorContext);

  const strings = ["Tip Amount", "Total"];
  const tipVal = tip !== null && tip !== Infinity ? tip.toFixed(2) : 0;
  const totalVal = total !== null && total !== Infinity ? total.toFixed(2) : 0;
  const values = [tipVal, totalVal];

  return (
    <div className="flex flex-col justify-start rounded-lg bg-very-dark-cyan p-5">
      {strings.map((s, i) => {
        return (
          <div key={s}>
            <div className="my-4 grid grid-cols-2 grid-rows-2">
              <div className="row-start-1 row-end-2 text-sm font-bold text-white">
                {s}
              </div>
              <div className="row-start-2 row-end-3 text-xs text-dark-grayish-cyan-100">
                / person
              </div>
              <div className="row-span-2 text-right text-3xl font-bold text-strong-cyan">
                {`$${values[i]}`}
              </div>
            </div>
          </div>
        );
      })}
      <button
        onClick={resetValues}
        className="mt-auto w-full rounded-md bg-strong-cyan py-2 text-sm font-bold text-very-dark-cyan active:bg-light-grayish-cyan-200"
      >
        RESET
      </button>
    </div>
  );
};

export default Console;
