import { useState } from "react";

/**
 * Custom hook to temporarily disable an action when it's triggered and then automatically re-enable it after a delay.
 * @param {number} delay The delay in milliseconds after which the action will be re-enabled. By default is 1200ms
 * @returns {[boolean, (callback: () => void) => void]} A tuple where the first element is a boolean
 * indicating if the action is currently active (true) or not (false), and the second element
 * is a callback function to trigger the action.
 */
const useDelayAction = (
  delay: number = 1200
): [boolean, (action: () => void) => void] => {
  const [isActive, setIsActive] = useState(true);

  const triggerAction = (callback: () => void) => {
    if (isActive) {
      setIsActive(false);
      callback();
      setTimeout(() => {
        setIsActive(true);
      }, delay);
    }
  };

  return [isActive, triggerAction];
};

export default useDelayAction;
