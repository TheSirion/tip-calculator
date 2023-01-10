interface ConsoleProps {
  tipAmount: number;
  total: number;
  reset: () => void;
}

const Console: React.FunctionComponent<ConsoleProps> = ({
  tipAmount,
  total,
  reset,
}: ConsoleProps) => {
  return (
    <div className="flex flex-col justify-between rounded-lg bg-very-dark-cyan p-5">
      <div>
        <div className="my-4 grid grid-cols-2 grid-rows-2">
          <div className="row-start-1 row-end-2 text-sm font-bold text-white">
            Tip Amount
          </div>
          <div className="row-start-2 row-end-3 text-xs text-dark-grayish-cyan-100">
            / person
          </div>
          <div className="row-span-2 text-right text-3xl font-bold text-strong-cyan">
            {tipAmount.toFixed(2)}
          </div>
        </div>

        <div className="my-4 grid grid-cols-2 grid-rows-2">
          <div className="row-start-1 row-end-2 text-sm font-bold text-white">
            Total
          </div>
          <div className="row-start-2 row-end-3 text-xs text-dark-grayish-cyan-100">
            / person
          </div>
          <div className="row-span-2 text-right text-3xl font-bold text-strong-cyan">
            {total.toFixed(2)}
          </div>
        </div>
      </div>

      <button
        onClick={reset}
        className="w-full rounded-md bg-strong-cyan py-2 text-sm font-bold text-very-dark-cyan active:bg-light-grayish-cyan-200"
      >
        RESET
      </button>
    </div>
  );
};

export default Console;
