import { createContext,useState } from "react";

export const DataContext=createContext(null);

export const DataContextProvider=(props)=> {
    const [data,setData]=useState({});
    const[timeV,setTimeV]=useState("");
    const [dateV,setDateV]=useState();
    return (
        <DataContext.Provider value={{data,setData,timeV,setTimeV,dateV,setDateV}}>
            {props.children}
        </DataContext.Provider>
    )
};