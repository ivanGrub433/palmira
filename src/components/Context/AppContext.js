import React from 'react'
import { createContext, useState} from 'react'

export const AppContext = createContext();
    
export function AppContextprovider(props) {
    const [Coment, setComent] = useState(" ");
    function createComent(name, email, message){
        const newComent={
            id : new Date(),
            name : name,
            email : email,
            message : message,
          }
          setComent(newComent);
          console.log(Coment);
      }
  return (
    <AppContext.Provider value = {{createComent}}> 
        {props.children}
    </AppContext.Provider>
  )
};