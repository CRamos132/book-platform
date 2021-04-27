import { useRef } from 'react';

const useDebounce = (
  action: (...args: string[]) => void,
  wait: number,
): (...args: string[]
) => void => {
  const timeoutRef = useRef<number | undefined>(undefined);

  const debouncedAction = (...args: string[]): void => {
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      action(...args);
    }, wait);
  };

  return debouncedAction;
};

export default useDebounce;
