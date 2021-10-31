import styled from "styled-components";

export const Wrapper = styled.button`
    display: block;
    background: var(--darkGrey);
    width: 25%;
    min-width: 200px;
    height: 60px;
    border-radius: 30px;
    border: none;
    margin: 20px auto;
    font: var(--fontBig);
    outline: none;
    cursor: pointer;
    transition: opacity 0.3s;
    color: var(--white);

    :hover{
        opacity: 0.8;
    }

`;