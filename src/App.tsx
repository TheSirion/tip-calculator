import { ReactElement } from "react";
import Card from "./components/Card";
import Console from "./components/Console";
import Controller from "./components/Controller";

const App = (): ReactElement => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-light-grayish-cyan-200 p-0">
      <div className="mb-[2.75em] text-4xl font-bold tracking-[.4em] text-dark-grayish-cyan-200 lg:text-xl">
        <h1>SPLI</h1>
        <h1>TTER</h1>
      </div>
      <Card>
        <Controller />
        <Console />
      </Card>
    </div>
  );
};

export default App;
