// opcion de incrementar con el valor, es pasar por argumento.

import { useState } from "react";

export const useCounter = (inicialValue = 10) => {
  const [counter, setCounter] = useState(inicialValue);

  const increment = (value) => {
    setCounter(counter + value);
  };

  const decremet = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(inicialValue);
  };

  return {
    counter,
    increment,
    decremet,
    reset,
  };
};
