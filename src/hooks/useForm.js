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

  // funcion para borrar los datos del formulario

  const onResetForm = () => {
    setFormState(inicialForm);
  };

  return {
    onResetForm,
    ...formState,
    formState,
    onInputChange,
  };
};
