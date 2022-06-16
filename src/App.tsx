import Card from "./components/Card";
import Control from "./components/Control";
import TipConsole from "./components/TipConsole";

const App = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-light-grayish-cyan-200'>
      <h1>SPLITTER</h1>
      <Card>
        <Control />
        <TipConsole />
      </Card>
    </div>
  );
};

export default App;
