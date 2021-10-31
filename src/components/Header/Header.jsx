import React from "react";
//router
import { Link } from "react-router-dom";

import RMDBImg from "../../images/react-movie-logo.svg";
import TMDBImg from "../../images/tmdb_logo.svg";

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

function Header(){
    return(
    <Wrapper>
        <Content>
            <Link to="/">
                <LogoImg src={RMDBImg} alt="rmdb-logo" />
            </Link>
            <TMDBLogoImg src={TMDBImg} alt="tmdb-logo" />
        </Content>
    </Wrapper>
    );
    
}

export default Header;