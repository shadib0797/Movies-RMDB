import React from "react";
//Styles
import { Wrapper, Image } from "./Actor.styles";

function Actor({ name, character, imgUrl }){
    return(
        <Wrapper>
            <Image src={imgUrl} alt="actor-thumb" />
            <h3>{name}</h3>
            <p>{character}</p>
        </Wrapper>
    )
}

export default Actor;