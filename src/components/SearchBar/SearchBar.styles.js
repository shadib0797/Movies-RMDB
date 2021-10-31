import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100px;
    padding: 0 20px;
    background: var(--darkGrey);
`;

export const Content = styled.div`
    position: relative;
    height: 55px;
    width: 100%;
    max-width: var(--maxWidth);
    border-radius: 40px;
    background: var(--medGrey);
    margin: 0 auto;
    color:(--white);

    img{
        position: absolute;
        left: 15px;
        top:14px;
        width: 30px;
    }

    input{
        font-size: var(--fontBig);
        position: absolute;
        left:0;
        margin: 8px 0;
        padding: 0 0 0 60px;
        width: 95%;
        height: 40px;
        background: transparent;
        border: 0;
        color: var(--white);

        :focus{
            outline: none;
        }
    }


`;