export const calculateTip = (
  bill: number,
  tip: number,
  numPeople: number
): number => {
  const totalWithTip = bill * tip;
  return totalWithTip / numPeople;
};

export const divideByPeople = (
  bill: number,
  tip: number,
  numPeople: number
): number => {
  return calculateTip(bill, tip, numPeople) + bill / numPeople;
};
