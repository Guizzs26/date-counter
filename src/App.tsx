import styles from "./App.module.css";

import { Counter } from "./components";

export default function App() {
  return (
    <div className={styles.appContainer}>
      <Counter />
    </div>
  );
}
