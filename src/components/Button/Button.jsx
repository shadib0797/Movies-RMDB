import React from "react";
//Styles
import { Wrapper } from "./Button.styles";

function Button({text, callback}){
    return (
        <Wrapper type="button" onClick={callback}>
            {text}
        </Wrapper>
    )
}

export default Button;