export const calculateBillWithTipPerPerson = (
  bill: number,
  tip: number,
  numberOfPeople: number
): number => (bill * (1 + tip)) / numberOfPeople;

export const calculateTipPerPerson = (
  bill: number,
  tip: number,
  numberOfPeople: number
): number => {
  if (
    typeof bill === "number" &&
    typeof tip === "number" &&
    typeof numberOfPeople === "number"
  ) {
    return (bill * tip) / numberOfPeople;
  }
  return 0;
};
