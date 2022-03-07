import React, { createContext, useState,useEffect } from "react";
import api from "../Services/api"

export const IndexContext = createContext();

export function IndexProvider({ children }) {
  
  const[ modulo, setModulo] = useState([])

  useEffect(async() => {
    try {

      const res = await api.get('/contagem')
      setModulo(res.data)
      console.log(res.data)
    } catch (error) {
    console.log(error)
    }

  },[]);

  return (
    <IndexContext.Provider value={{modulo}}>
      {children}
    </IndexContext.Provider>
  );
}