import React, { useState } from "react";
import DefaultInput from "./input.style";


const Input = (props) => {
    const [text, setText] = useState("");
    const handleChange = (event) => {
        setText(event.target.value);
        sendText(event.target.value);
    };

    const sendText = (value) =>{
        props.getText(value);
    };
    
    return(
    <label>
        {props?.label}
         <DefaultInput ref={props.ref} placeholder={props.placeholder} type={props?.type ?? `text`} value={text} onChange={handleChange}/>
    </label>
    )
}

export default Input;