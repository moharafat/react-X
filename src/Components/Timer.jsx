import { useRef, useState, useEffect } from "react";
import React from 'react';

const Timer = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null); // Initialize with null

  useEffect(() => {
    // Set up the interval
    intervalRef.current = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000); // Run every 1000ms (1 second)

    // Return a cleanup function for useEffect
    // This function will be called when the component unmounts
    // or before the effect re-runs (if dependencies were present and changed).
    return () => {
      if (intervalRef.current) { // Good practice to check if it exists before clearing
        clearInterval(intervalRef.current);
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    <div>
      <h1>Timer {count} seconds</h1>
      <button onClick={() => clearInterval(intervalRef.current)}>Stop timer</button>
    </div>
  );
};

export default Timer;