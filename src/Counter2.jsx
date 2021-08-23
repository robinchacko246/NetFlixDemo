import React from 'react';
import { useState,useEffect } from 'react';

function Counter() {
    const [state,setState]=useState(0);
    useEffect(() => {
        console.log("mounting......");
        console.log("updating",state);
        return () => {
           console.log("cleanup",state);
        }
    },[state])   //when we given array value here return will run first then mounting , and updating works
    
  
   

    return (
        <div>
            <button onClick={()=>setState(state+1)}>Add State</button>
            <h1>value of counter is  {state}</h1>
        </div>
    )
}

export default Counter
