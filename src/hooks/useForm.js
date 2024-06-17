import { useState } from "react";

export const useForm = (inicialForm = {}) => {
  const [formState, setFormState] = useState({ inicialForm });

  // funcion para hacer el cambio del input

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return {
    ...formState,
    formState,
    onInputChange,
  };
};
