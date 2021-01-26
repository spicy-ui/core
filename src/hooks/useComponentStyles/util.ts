type Dict<T = any> = Record<string, T>;

export function omit<T extends Dict, K extends keyof T>(object: T, keys: K[]) {
  const result: Dict = {};

  Object.keys(object).forEach((key) => {
    if (!keys.includes(key as K)) {
      result[key] = object[key];
    }
  });

  return result as Omit<T, K>;
}

export function filterUndefined(object: Dict) {
  const result: Dict = {};

  Object.keys(object).forEach((key) => {
    const val = object[key];

    if (val !== null && val !== undefined) {
      result[key] = val;
    }
  });

  return result;
}

// eslint-disable-next-line @typescript-eslint/ban-types
function isFunction(value: any): value is Function {
  return typeof value === 'function';
}

export function runIfFn<Result, Args>(valueOrFn: Result | ((...fnArgs: Args[]) => Result), ...args: Args[]) {
  return isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn;
}
