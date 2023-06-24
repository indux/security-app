import React from "react";

const SECURITY_CODE = "paradigma";

const UseReducer = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const onConfirm = () => {
    dispatch({ type: actionTypes.confirm });
  };

  const onError = () => {
    dispatch({ type: actionTypes.error });
  };

  const onWrite = ({ target: { value } }) => { 
    dispatch({ type: actionTypes.write, paylod: value });
  };

  const onInputBottom = () => {
    dispatch({ type: actionTypes.bottominput });
  };

  const onDeleted = () => {
    dispatch({ type: actionTypes.delete });
  };

  const onBack = () => {
    dispatch({ type: actionTypes.back });
  };

  const onReset = () => {
    dispatch({ type: actionTypes.reset });
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
          onChange={onWrite}
        />
        <button
          className="py-2 px-4 bg-black rounded text-white"
          onClick={onInputBottom}
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
            onClick={onDeleted}
          >
            Eliminar
          </button>
          <button
            className="py-2 px-4 bg-black rounded text-white"
            onClick={onBack}
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
          onClick={onReset}
        >
          Recuperar
        </button>
      </div>
    );
  }
};

const initialState = {
  value: "",
  error: false,
  loading: false,
  deleted: false,
  confirmed: false,
};

const actionTypes = {
  confirm: "CONFIRMED",
  error: "ERROR",
  write: "WRITE",
  bottominput: "BOTTOMINPUT",
  delete: "DELETE",
  back: "BACK",
  reset: "RESET",
};

const reducerObject = (state, paylod) => ({
  [actionTypes.confirm]: {
    ...state,
    error: false,
    loading: false,
    confirmed: true,
  },
  [actionTypes.error]: {
    ...state,
    error: true,
    loading: false,
  },
  [actionTypes.write]: {
    value: paylod,
  },
  [actionTypes.bottominput]: {
    ...state,
    error: false,
    loading: true,
  },
  [actionTypes.delete]: {
    ...state,
    deleted: true,
    confirmed: false,
    value: "",
  },
  [actionTypes.back]: {
    ...state,
    confirmed: false,
    deleted: false,
    value: "",
  },
  [actionTypes.reset]: {
    ...state,
    deleted: false,
    completed: false,
    value: "",
  },
});

const reducer = (state, action) => {
  if (reducerObject(state)[action.type]) {
    return reducerObject(state, action.paylod)[action.type];
  } else {
    return state;
  }
};

export { UseReducer };
