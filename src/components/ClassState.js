import React from "react";

const SECURITY_CODE = "paradigma";

class ClassState extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      error: false,
      loading: false,
    };
  }

  componentDidUpdate() {
    if (this.state.loading) {
      setTimeout(() => {
        if (SECURITY_CODE === this.state.value) {
          this.setState({ error: false, loading: false });
        } else {
          this.setState({ error: true, loading: false });
        }
      }, 3000);
    }
  }

  render() {
    return (
      <div className="py-10 flex flex-col justify-center items-center space-y-5 bg-red-500">
        <h2 className="text-3xl font-bold">Eliminar ClassState</h2>

        <p className="text-lg font-normal">
          Por favor, escribe el código de seguridad
        </p>

        {this.state.error && !this.state.loading && (
          <p className="text-xl font-semibold">
            Error: El código es incorrecto.
          </p>
        )}

        {this.state.loading && (
          <p className="text-xl font-semibold">Cargando...</p>
        )}

        <input
          className="rounded py-2 px-2"
          type="text"
          placeholder="Código de seguridad"
          value={this.state.value}
          onChange={(e) => {
            this.setState({ value: e.target.value });
          }}
        />
        <button
          className="py-2 px-4 bg-black rounded text-white"
          onClick={() => {
            this.setState({ loading: true });
          }}
        >
          Comprobar
        </button>
      </div>
    );
  }
}

export { ClassState };
