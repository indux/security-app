import React from "react";

const UseState = () => {
  const [error, setError] = React.useState(false);

  return (
    <div>
      <h2>Eliminar UseState</h2>

      <p>Por favor, escribe el código de seguridad</p>

      {error && <p>Error: El código es incorrecto.</p>}

      <input type="text" placeholder="Código de seguridad" />
      <button
        onClick={() => {
          setError((prevState) => !prevState);
        }}
      >
        Comprobar
      </button>
    </div>
  );
};

export { UseState };
