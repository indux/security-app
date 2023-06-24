import React from "react";
import { UseState } from "./components/UseState";
import { ClassState } from "./components/ClassState";
import { UseReducer } from "./reducer/UseReducer";

const App = () => {
  return (
    <>
      {/* <UseState /> */}
      <UseReducer />
      <ClassState />
    </>
  );
};

export { App };
