import React, { useState } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [id, setId] = useState(1);

  return <Context.Provider value={{ id, setId }}>{children}</Context.Provider>;
}

export { ContextProvider, Context };
