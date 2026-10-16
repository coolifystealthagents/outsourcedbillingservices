export async function waitForTracker(getTracker, sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay)), maxWaitMs = 2000, intervalMs = 50) {
  if (maxWaitMs < 0 || intervalMs <= 0) throw new RangeError('Tracker wait timing must be positive');
  for (let elapsed = 0; elapsed < maxWaitMs; elapsed += intervalMs) {
    const tracker = getTracker();
    if (tracker) return tracker;
    await sleep(Math.min(intervalMs, maxWaitMs - elapsed));
  }
  return getTracker();
}
