import { useEffect, useState, useCallback } from "react";

const useKeyDown = (key) => {
  const [isKeyDown, setIsKeyDown] = useState(false);
  const handleKeyDown = useCallback((e) => {
    if (e.key === key) {
      setIsKeyDown(true);
    }
  }, []);

  const handleKeyUp = useCallback((e) => {
    if (e.key === key) {
      setIsKeyDown(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    }
  }, []);
  
  return isKeyDown;
}

export default useKeyDown;