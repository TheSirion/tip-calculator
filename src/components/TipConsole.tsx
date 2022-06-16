const TipConsole: React.FC = () => {
  return (
    <div className='bg-very-dark-cyan rounded-lg p-5 flex flex-col justify-between'>
      <div>
        <div className='grid grid-cols-2 grid-rows-2 my-4'>
          <div className='text-white row-start-1 row-end-2 text-sm'>
            Tip Amount
          </div>
          <div className='text-dark-grayish-cyan-100 row-start-2 row-end-3 text-xs'>
            / person
          </div>
          <div className='text-strong-cyan row-span-2 text-3xl font-bold'>
            {"$4.27"}
          </div>
        </div>

        <div className='grid grid-cols-2 grid-rows-2 my-4'>
          <div className='text-white row-start-1 row-end-2 text-sm'>Total</div>
          <div className='text-dark-grayish-cyan-100 row-start-2 row-end-3 text-xs'>
            / person
          </div>
          <div className='text-strong-cyan row-span-2 text-3xl font-bold'>
            {"$32.79"}
          </div>
        </div>
      </div>

      <button className='text-sm py-2 bg-strong-cyan text-very-dark-cyan font-bold w-full rounded-md'>
        RESET
      </button>
    </div>
  );
};

export default TipConsole;
