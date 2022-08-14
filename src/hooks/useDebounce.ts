import { useEffect, useRef } from 'react';

export const useDebounce = ({
  value,
  cbFunc,
  ms = 1000,
}: {
  value: any;
  cbFunc: () => void;
  ms?: number;
}) => {
  const fn = useRef<() => void>(cbFunc);

  useEffect(() => {
    fn.current = cbFunc;
  }, [cbFunc]);

  useEffect(() => {
    const handler = () => fn.current();

    const timeout = setTimeout(handler, ms);
    return () => clearTimeout(timeout);
  }, [value, ms]);
};
