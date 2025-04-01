import { createContext, useState } from "react"

// eslint-disable-next-line react-refresh/only-export-components
export const tokenContext=createContext(null)
// eslint-disable-next-line react/prop-types
export default function UserProvider({children}) {
    const [token,setToken]=useState(localStorage.getItem("token"));
    function logOut(){
      setToken(null);
      localStorage.removeItem("token")
    }
  return (
    <tokenContext.Provider value={{token,setToken,logOut}}>
        {children}
    </tokenContext.Provider>
  )
}
