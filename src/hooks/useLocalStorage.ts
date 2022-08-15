import { Dispatch, SetStateAction, useState } from 'react';

type SetValue<T> = Dispatch<SetStateAction<T>>;

const getStorageValueBasedOnKey = (key: string, initialValue: any) => {
  try {
    const item: string | null = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  } catch (error) {
    console.error(error);
    return initialValue;
  }
};

export const useLocalStorage = (
  key: string,
  initialValue: any
): [any, SetValue<any>] => {
  const [storedValue, setStoredValue] = useState<any>(() => {
    return getStorageValueBasedOnKey(key, initialValue);
  });

  const setValue = (value: any): void => {
    try {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};
