export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let api_called = weakMap.get(endpoint) || 0;
  api_called++;
  weakMap.set(endpoint, api_called);
  if (api_called >= 5) {
    throw new Error("Endpoint load is high");
  }
  return api_called;
}
