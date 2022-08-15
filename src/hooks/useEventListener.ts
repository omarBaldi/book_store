import { useEffect, useRef } from 'react';

export enum EVENT_LISTENERS {
  CLICK = 'click',
  RESIZE = 'resize',
}

export const useEventListener = ({
  element = window,
  eventType,
  cbFunc,
}: {
  element?: HTMLElement | Document | Window;
  eventType: EVENT_LISTENERS;
  cbFunc: (e: any) => void;
}) => {
  const fn = useRef<(e: any) => void>(cbFunc);

  useEffect(() => {
    fn.current = cbFunc;
  }, [cbFunc]);

  useEffect(() => {
    const handler = (e: any) => fn.current(e);

    element.addEventListener(eventType, handler);
    return () => element.removeEventListener(eventType, handler);
  }, [element, eventType]);
};
