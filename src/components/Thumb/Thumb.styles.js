import styled from "styled-components";

export const Image=styled.img`
    width: 100%;
    max-width: 768px;
    object-fit: cover;
    border-radius: 20px;
    transition: all 0.3s;
    animation: animateThumb 0.5s;

    :hover{
        opacity: 0.8;
    }

    @keyframes animateThumb{
        from{
            opacity: 0;
        }to{
            opacity: 1;
        }
    }
`;