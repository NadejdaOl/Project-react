import React, { useState } from "react";
import classes from "./counter.module.css";

const Counter = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className={classes.counterBox}>
        
      <div className={classes.counterButton}>
        <button className={classes.decrement_btn} onClick={decrement}>
          -
        </button>
      </div>
      <div className={classes.counter}>{count}</div>
      <div className={classes.counterButton}>
        <button className={classes.increment_btn} onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
