import axios from "axios";
import { createContext } from "react";
import { useContext } from 'react'
import { tokenContext } from '../context/User.context';

export const cardContext=createContext(null)


// export  const cardContext=createContext(null);
// eslint-disable-next-line react/prop-types
export default function CardProvider({children}){
    const {token}= useContext(tokenContext);

   async function addProductToCard({productId}){
       try {
        const options={
            url:"https://ecommerce.routemisr.com/api/v1/cart",
            method:"POST",
            headers:{
                token:token
            },
            data:{
               productId
            }
        }
        let {data}=await axios.request(options);
        console.log(data);
        
       } 
       catch (error) {
        console.log(error);
        
       }
    }

    return <cardContext.Provider value={{addProductToCard}}>
        {children}
    </cardContext.Provider>
}
