import {
  ReactElement,
  createContext,
  useEffect,
  useReducer,
  useState,
} from "react";

import {
  calculateBillWithTipPerPerson,
  calculateTipPerPerson,
} from "../utils/calculator";
import { createAction } from "./Calculator.action";
import { calculatorReducer, initialState } from "./Calculator.reducer";
import CALCULATOR_ACTION_TYPES from "./Calculator.types";

interface CalculatorContextType {
  bill: number | null;
  tip: number | null;
  numberOfPeople: number | null;
  tipPerPerson: number | null;
  total: number | null;
  isResetButtonDisabled: boolean;
  handleBillChange: (billValue: number) => void;
  handleTipChange: (tipValue: number) => void;
  handleNumberOfPeopleChange: (numberOfPeopleValue: number) => void;
  resetValues: () => void;
}

export const CalculatorContext = createContext<CalculatorContextType>({
  bill: null,
  tip: null,
  numberOfPeople: null,
  tipPerPerson: null,
  total: null,
  isResetButtonDisabled: true,
  handleBillChange: () => {},
  handleTipChange: () => {},
  handleNumberOfPeopleChange: () => {},
  resetValues: () => {},
});

interface CalculatorProviderProps {
  children: React.ReactNode;
}

export const CalculatorProvider = ({
  children,
}: CalculatorProviderProps): ReactElement => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);
  const [isResetButtonDisabled, setIsResetButtonDisabled] = useState(true);

  const { bill, tip, numberOfPeople, tipPerPerson, total } = state;

  const handleBillChange = (billValue: number): void => {
    dispatch(createAction(CALCULATOR_ACTION_TYPES.SET_BILL, billValue));
  };

  const handleTipChange = (tipValue: number): void => {
    dispatch(createAction(CALCULATOR_ACTION_TYPES.SET_TIP, tipValue));
  };

  const handleNumberOfPeopleChange = (numberOfPeopleValue: number): void => {
    dispatch(
      createAction(
        CALCULATOR_ACTION_TYPES.SET_NUMBER_OF_PEOPLE,
        numberOfPeopleValue
      )
    );
  };

  const resetValues = (): void => {
    dispatch(createAction(CALCULATOR_ACTION_TYPES.RESET_VALUES));
  };

  const disableButton = (): void => {
    if (
      state.bill === initialState.bill &&
      state.numberOfPeople === initialState.numberOfPeople &&
      state.tip === initialState.tip
    ) {
      setIsResetButtonDisabled(true);
    } else {
      setIsResetButtonDisabled(false);
    }
  };

  useEffect(() => {
    if (bill !== null && tip !== null && numberOfPeople !== null) {
      const totalPerPerson = calculateBillWithTipPerPerson(
        bill,
        tip,
        numberOfPeople
      );
      const tipCalc = calculateTipPerPerson(bill, tip, numberOfPeople);
      dispatch(
        createAction(CALCULATOR_ACTION_TYPES.SET_TIP_PER_PERSON, tipCalc)
      );
      dispatch(createAction(CALCULATOR_ACTION_TYPES.SET_TOTAL, totalPerPerson));
    }
    disableButton();
  }, [bill, tip, numberOfPeople, tipPerPerson, total]);

  const value: CalculatorContextType = {
    bill,
    tip,
    numberOfPeople,
    tipPerPerson,
    total,
    isResetButtonDisabled,
    handleBillChange,
    handleTipChange,
    handleNumberOfPeopleChange,
    resetValues,
  };

  return (
    <CalculatorContext.Provider value={value}>
      {children}
    </CalculatorContext.Provider>
  );
};
