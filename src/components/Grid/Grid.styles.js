import styled from "styled-components";


export const Wrapper=styled.div`
    max-width: var(--maxWidth);
    padding: 0 20px;
    margin: 0 auto;

    h1{
        color: var(--medGrey);
        margin: 0.67em 0;

        @media screen and (max-width:768px){
            font-size: var(--fontBig);
        }

    }
`;

export const Content=styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;

`;