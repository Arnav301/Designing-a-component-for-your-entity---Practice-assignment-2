// write button card here

import { useState } from "react";

function Button(){
    const [colour, setColor]=useState('crimson')
    return(
        <div>
            <button style ={{
                backgroundColor: colour
            }} onClick={()=>{
                setColor((e)=>e === 'crimson' ? 'blue' : 'crimson')
            }}
            >Buy Now
            </button>
        </div>

    ); 
}

export default Button;