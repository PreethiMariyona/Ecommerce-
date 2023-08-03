import { useState,createContext,useContext } from "react";
import Grandchild from "./Usecontext";

function Child(){
    return(
        <>
        <h1>Child</h1>
        <Grandchild/>
        </>
    )
}
export default Child
