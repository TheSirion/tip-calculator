export function calculateTip(bill: number, tip: number): number {
  return bill * tip;
}

export function divideByPeople(
  bill: number,
  tip: number,
  numOfPeople: number
): number {
  return calculateTip(bill, tip) / numOfPeople;
}
