import { useState } from "react";

function Counter2() {
  const initialCount = localStorage.getItem("counter")
    ? parseInt(localStorage.getItem("counter"), 10)
    : 0;
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(count + 1);
    localStorage.setItem("counter", (count + 1).toString());
  };
  const decrement = () => {
    setCount(count - 1);
    localStorage.setItem("counter", (count - 1).toString());
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <p>
        <button onClick={decrement}> - </button>
        {count}
        <button onClick={increment}> + </button>
        <br />
        <button onClick={reset}> Reset </button>
      </p>
    </>
  );
}
export default Counter2;
