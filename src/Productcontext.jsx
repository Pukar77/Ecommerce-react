import React, { createContext, useEffect, useState } from "react";

const UserContext = createContext();

export default UserContext

let getproduct = async(setItems)=>{
    let response = await fetch ("https://api.escuelajs.co/api/v1/products");
    let data = await response.json();
    console.log(data);
    setItems(data);
}



export const UserContextProvider = ({children})=>{

    const [user, setUser] = useState(null);
    const [items, setItems] = useState([]);

    useEffect(()=>{
        getproduct(setItems);
        },[]);

        return(
    <UserContext.Provider value={{user, setUser, items}}>
{children}
</UserContext.Provider>
        );
};