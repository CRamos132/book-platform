import { useRef } from 'react';
/**
 * A debouncer hook to delay functions
 *
 * Example:
 *
 * const debouncedAction = useDebounce(()=>{alert('hi)}, 500);
 *
 * calling debouncedAction() will wait then alert
 * @param action the function you want to debounce
 * @param wait  the wait untill the function is called
 * @returns the debounced function
 */
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
