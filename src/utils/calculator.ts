export const calculateTip = (bill: number, tip: number): number => {
  return bill * tip;
};

export const divideByPeople = (
  bill: number,
  tip: number,
  numPeople: number = 1
): number => {
  return calculateTip(bill, tip) / numPeople;
};
