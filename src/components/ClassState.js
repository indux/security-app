import React from "react";

class ClassState extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: true,
    };
  }

  render() {
    return (
      <div>
        <h2>Eliminar ClassState</h2>

        <p>Por favor, escribe el código de seguridad</p>

        {this.state.error && <p>Error: El código es incorrecto.</p>}

        <input type="text" placeholder="Código de seguridad" />
        <button
          onClick={() => {
            this.setState((prevState) => ({
              error: !prevState.error,
            }));
          }}
        >
          Comprobar
        </button>
      </div>
    );
  }
}

export { ClassState };
