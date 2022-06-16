const Control = () => {
  return (
    <div className='flex flex-col gap-6'>
      <form className='flex flex-col'>
        <label className='text-sm font-bold text-dark-grayish-cyan-200 mb-1 rounded-md'>
          Bill
        </label>
        <input
          type='number'
          className='bg-light-grayish-cyan-100 text-very-dark-cyan font-bold text-right'
        />
      </form>

      <div>
        <p className='text-sm font-bold text-dark-grayish-cyan-200 mb-2'>
          Select Tip %
        </p>
        <div className='grid grid-cols-3 grid-rows-2 gap-2'>
          <button className='btn-primary'>5%</button>
          <button className='btn-primary'>10%</button>
          <button className='btn-primary'>15%</button>
          <button className='btn-primary'>25%</button>
          <button className='btn-primary'>50%</button>
          <button className='btn-secondary'>Custom</button>
        </div>
      </div>

      <form className='flex flex-col'>
        <label className='text-sm font-bold text-dark-grayish-cyan-200 mb-1 rounded-md'>
          Number of People
        </label>
        <input
          type='number'
          className='bg-light-grayish-cyan-100 text-very-dark-cyan font-bold text-right'
        />
      </form>
    </div>
  );
};

export default Control;
