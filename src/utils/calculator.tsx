export const calculateBillWithTipPerPerson = (
  bill: number,
  tip: number,
  numberOfPeople: number
): number => (bill * (1 + tip)) / numberOfPeople;

export const calculateTipPerPerson = (
  bill: number,
  tip: number,
  numberOfPeople: number
): number => (bill * tip) / numberOfPeople;
