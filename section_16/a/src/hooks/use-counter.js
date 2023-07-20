import { useEffect, useState } from "react";

export default function useCounter( start = 0, step = 1, duration = 1000 ) {
  const [counter, setCounter] = useState(start);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + step);
    }, duration);
    return () => clearInterval(interval);
  }, [counter, duration, step]);

  return counter;
}
