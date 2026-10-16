export function waitForTracker<T>(
  getTracker: () => T | undefined,
  sleep?: (delay: number) => Promise<unknown>,
  maxWaitMs?: number,
  intervalMs?: number,
): Promise<T | undefined>;
