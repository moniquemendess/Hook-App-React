import { useEffect, useState } from "react";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "monique",
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

  useEffect(() => {
    console.log("useEfeect called");
  });

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
    </>
  );
};
