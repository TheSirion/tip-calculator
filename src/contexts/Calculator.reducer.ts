import { Action } from "./Calculator.action";

interface CalculatorState {
  bill: number | null;
  tip: number | null;
  numberOfPeople: number | null;
  tipPerPerson: number | null;
  total: number | null;
}

export const initialState = {
  bill: null as number | null,
  tip: null as number | null,
  numberOfPeople: null as number | null,
  tipPerPerson: null as number | null,
  total: null as number | null,
};

export const calculatorReducer = (
  state: CalculatorState,
  action: Action
): CalculatorState => {
  switch (action.type) {
    case "calculator/SET_BILL":
      return { ...state, bill: action.payload };
    case "calculator/SET_TIP":
      return { ...state, tip: action.payload };
    case "calculator/SET_NUMBER_OF_PEOPLE":
      return { ...state, numberOfPeople: action.payload };
    case "calculator/SET_TIP_PER_PERSON":
      return { ...state, tipPerPerson: action.payload };
    case "calculator/SET_TOTAL":
      return { ...state, total: action.payload };
    case "calculator/RESET_VALUES":
      return initialState;
    default:
      return { ...state };
  }
};
