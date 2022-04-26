import React from "react";
import { useState } from "react";

 const Hook=()=>{
    let state=useState()  
    const [count,setCont]=useState(1)
const IncNum=()=>{
    setCont(count+1)
    console.log("click")
}
const DecNum=()=>{
    setCont(count-1)
}

const Double=()=>{
    setCont(count*2)
}
const cssStyle={
    width:'60%',
    margin:'auto',
    marginTop:'200px',
    border:'1px solid red',

}
const flexx={
    display: 'flex',
    justifyContent:'space-between'
}
const C={
    textAlign:'center'
}
if(count%2==1){
    C.color="red"
}
else{
    C.color="green"
}

     return(
         <>
         <div style={cssStyle}>
             <h1 style={C}>{count}</h1>
             
             <div style={flexx}>
             <button onClick={IncNum}>Increment</button>
             <button onClick={DecNum}>Decrement</button>
             <button onClick={Double}>Doule</button>
             </div>
             </div>
         </>
     )
 }
 export default Hook;