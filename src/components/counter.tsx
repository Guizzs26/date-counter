import styles from "./counter.module.css";
import { ChangeEvent, useState } from "react";

export function Counter() {
  const [step, setStep] = useState<number>(1);
  const [count, setCount] = useState<number>(0);

  const date = new Date(Date.now());
  date.setDate(date.getDate() + count);

  const handleIncrementCounter = () => {
    setCount((c) => c + step);
  };

  const handleDecrementCounter = () => {
    setCount((c) => c - step);
  };

  const handleReset = () => {
    setStep(1);
    setCount(0);
  };

  const handleStepChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStep(Number(e.target.value));
  };

  const handleCountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (!isNaN(value)) {
      setCount(value);
    }
  };

  return (
    <>
      <h1 className={styles.title}>Date Counter</h1>

      <div className={styles.inputBox}>
        <input
          type="range"
          min={1}
          max={10}
          value={step}
          onChange={handleStepChange}
          className={styles.inputBoxRange}
        />
        <span className={styles.inputBoxSpan}>{step}</span>
      </div>

      <div className={styles.inputBox}>
        <button
          onClick={handleDecrementCounter}
          className={styles.inputBoxButton}
        >
          -
        </button>
        <input
          type="text"
          value={count}
          onChange={handleCountChange}
          className={styles.inputBoxInput}
        />
        <button
          onClick={handleIncrementCounter}
          className={styles.inputBoxButton}
        >
          +
        </button>
      </div>

      <div className={styles.dateContainer}>
        <span className={styles.dateText}>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} ${count === 1 ? "day" : "days"} from today is `
            : `${Math.abs(count)} ${count === -1 ? "day" : "days"} ago was `}
        </span>
        <span className={styles.dateValue}>{date.toDateString()}</span>
      </div>

      {step !== 1 || count !== 0 ? (
        <button onClick={handleReset} className={styles.resetButton}>
          Reset
        </button>
      ) : null}
    </>
  );
}
