import { useState } from "react";
import digital from "../styles/digital.css"

const Digital = () => {
    let time = new Date().toLocaleTimeString()
    let [state,setState] = useState(time)

   setInterval(()=>{
    let time = new Date().toLocaleTimeString()
    setState(time)
   },1000)
   
    return ( 
        <div className="digital">
            <div className="items"> 
            <p className="para">"We all have our time machines. Some take us back, they're called memories. Some take us forward, they're called dreams."</p>
            </div>
            <div className="time">
            <h1>{state}</h1>
            </div>
            
        </div>
     );
}
 
export default Digital;