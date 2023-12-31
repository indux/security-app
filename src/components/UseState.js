import React from "react";

const SECURITY_CODE = "paradigma";

const UseState = () => {
  const [state, setState] = React.useState();

  const onConfirm = () => {
    setState({
      ...state,
      error: false,
      loading: false,
      confirmed: true,
    });
  };

  const onError = () => {
    setState({
      ...state,
      error: true,
      loading: false,
    });
  };

  const onWrite = (value) => {
    const valueFinal = value.toLowerCase();

    setState({
      ...state,
      value: valueFinal,
    });
  };

  const onInputBottom = () => {
    setState({
      ...state,
      error: false,
      loading: true,
    });
  };

  const onDeleted = () => {
    setState({
      ...state,
      deleted: true,
      confirmed: false,
      value: "",
    });
  };

  const onBack = () => {
    setState({
      ...state,
      confirmed: false,
      deleted: false,
      value: "",
    });
  };

  const onReset = () => {
    setState({
      ...state,
      deleted: false,
      completed: false,
      value: "",
    });
  };

  React.useEffect(() => {
    if (state.loading) {
      setTimeout(() => {
        if (state.value === SECURITY_CODE) {
          onConfirm();
        } else {
          onError();
        }
      }, 3000);
    }
  }, [state.loading]);

  if (!state.deleted && !state.confirmed) {
    return (
      <div className="flex flex-col justify-center items-center space-y-5 bg-blue-500 h-80">
        <h2 className="text-3xl font-bold">Eliminar UseState</h2>

        <p className="text-lg font-normal">
          Por favor, escribe el código de seguridad
        </p>

        {state.error && (
          <p className="text-xl font-semibold">
            Error: El código es incorrecto.
          </p>
        )}

        {state.loading && <p className="text-xl font-semibold">Cargando...</p>}

        <input
          className="rounded py-2 px-2"
          type="text"
          placeholder="Código de seguridad"
          value={state.value}
          onChange={(e) => {
            onWrite(e.target.value);
          }}
        />
        <button
          className="py-2 px-4 bg-black rounded text-white"
          onClick={() => {
            onInputBottom();
          }}
        >
          Comprobar
        </button>
      </div>
    );
  } else if (state.confirmed) {
    return (
      <div className="flex flex-col justify-center items-center space-y-5 bg-blue-500 h-80">
        <h2 className="text-3xl font-bold">Eliminar Use State</h2>
        <p className="text-lg font-normal">¿Estás seguro de eliminarlo?</p>
        <div className="flex space-x-4">
          <button
            className="py-2 px-4 bg-black rounded text-white"
            onClick={() => {
              onDeleted();
            }}
          >
            Eliminar
          </button>
          <button
            className="py-2 px-4 bg-black rounded text-white"
            onClick={() => {
              onBack();
            }}
          >
            Cancelar
          </button>
        </div>
      </div>
    );
  } else if (state.deleted) {
    return (
      <div className="flex flex-col justify-center items-center space-y-5 bg-blue-500 h-80">
        <h2 className="text-3xl font-bold">UseState fue eliminado</h2>
        <p className="text-lg font-normal">
          ¿Quieres volver a recuperar UseState?
        </p>
        <button
          className="py-2 px-4 bg-black rounded text-white"
          onClick={() => {
            onReset();
          }}
        >
          Recuperar
        </button>
      </div>
    );
  }
};

export { UseState };
