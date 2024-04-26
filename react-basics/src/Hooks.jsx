import { useState } from "react";

function Hooks(){
    const [count ,update]=useState(0);
    const updateVal = ()=>{
        update(count+1);
    }
         
    return(
        <>
               <b> Data : { count }</b>
               <br/>
               <button onClick={updateVal}>Update Data +1</button>
        </>
    )
}
export default Hooks;
