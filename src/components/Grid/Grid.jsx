import React from "react";
//Styles
import { Wrapper, Content } from "../Grid/Grid.styles";

function Grid({heading, children}){
    return(
        <Wrapper>
            <h1>{heading}</h1>
            <Content>{children}</Content>
        </Wrapper>
    )
}

export default Grid;