const MAX = 8;

export function getNextCycle(currentCycle: number) {
  const next = currentCycle + 1;
  if (next > MAX) {
    return 1;
  }
  return next;
}
