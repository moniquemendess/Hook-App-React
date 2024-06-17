import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "monique123",
    email: "monique123@google.com",
  });

  // destructurar el obj
  const { username, email } = formState;

  // funcion para hacer el cambio del input

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // Con las dependencias de un arreglo vacio se renderiza solo una vez
  useEffect(() => {
    //console.log("useEfeect called");
  }, []);

  // Este efecto vas a disparar toda vez que haya un cambio en el formulario
  useEffect(() => {
    //console.log("formState changed");
  }, [formState]);

  // Este efecto vas a disparar toda vez que haya un cambio en el email
  useEffect(() => {
    //console.log("email changed");
  }, [email]);

  return (
    <>
      <h1>Formulario Simple </h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="monique123@google.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      {username === "monique12" && <Message />}
    </>
  );
};
