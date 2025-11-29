import React, { useState }  from 'react';



export  function ToggleButton(){
    const[toggle,setToggle]=useState(false);
    function handle(){
        setToggle(!toggle);
    }
    return(<>
    <button onClick={handle} >
<h1>{toggle?"ON":"OFF"}</h1>

    </button>
    
    
    </>)
}

export function DayNightMode(){
     const[isnight,setNight]=useState(false);
     function handle(){
        setNight(!isnight)
        
     }
    return(<>
<div style={{

                   height: "100vh",
                    backgroundColor: isnight ? "black" : "white",
                    color: isnight ? "white" : "black",
                    
}}></div>
<button onClick={handle}>{isnight?"Night":"day"}</button>
    </>)
}