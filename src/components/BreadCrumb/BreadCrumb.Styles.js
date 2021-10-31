import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70px;
    background-color: var(--medGrey);
    color: var(--white);
`;

export const Content = styled.div`
    display: flex;
    width: 100%;
    max-width: var(--maxWidth);
    padding: 0 20px;

    span{
        font-size: var(--fontMed);
        color: var(--white);
        padding-right: 10px;
        text-decoration: none;

        @media screen and (max-width: 768px){
            font-size: var(--fontSmall);
        };
    }
`;