import React from "react";
import './index.css'

const Introtwo = ()=>{
return(
    <div>
        <h1 className="heading">Lets learn how to create components in React</h1>
        <div className="flex"> 
        <p>It is good practice to create new folders everytime</p>
        <p>Codes in React are written in the src folder.</p>
        </div>
        
    </div>
);



};

const Button = () =>{
    return(
        <div>
            <button className="Button"> Next Lesson</button>
        </div>
    )
}

export default Introtwo
export {Button}
