import React from "react";
//Router
import { Link } from "react-router-dom";
//Styles
import { Wrapper, Content } from "./BreadCrumb.Styles";

function BreadCrumb({movieTitle}){
    return(
        <Wrapper>
            <Content>
                <Link to='/'>
                    <span>Home</span>
                </Link>
                <span>|</span>
                <span>{movieTitle}</span>
            </Content>
        </Wrapper>
    )
}

export default BreadCrumb;