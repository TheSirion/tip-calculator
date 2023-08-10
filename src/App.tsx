import { ReactElement } from "react";
import Card from "./components/Card";
import Console from "./components/Console";
import Control from "./components/Control";

const App = (): ReactElement => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-light-grayish-cyan-200">
      <div className="mb-[2.75em] font-bold tracking-[.4em] text-dark-grayish-cyan-200">
        <h1>SPLI</h1>
        <h1>TTER</h1>
      </div>
      <Card>
        <Control />
        <Console />
      </Card>
    </div>
  );
};

export default App;
