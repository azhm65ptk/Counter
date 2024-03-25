import { useState } from "react";

function Counter1() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
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
export default Counter1;
