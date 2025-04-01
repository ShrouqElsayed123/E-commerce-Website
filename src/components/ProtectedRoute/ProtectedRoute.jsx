import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { tokenContext } from "../context/User.context";

// eslint-disable-next-line react/prop-types
export default function ProtectedRoute({children}) {
    let {token}=useContext(tokenContext);
    if(token){
        return children
    }else{
        return <Navigate to="/login"/>
    }

  
}
