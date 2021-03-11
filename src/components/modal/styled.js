import styled, { css } from "styled-components";

export const ModalOverlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: -100;
    transition: 0.3s;
    will-change: z-index, background-color, opacity;
    ${(props) =>
        props.open &&
        css`
            z-index: 35;
            background-color: rgb(16 17 29 / 30%);
            opacity: 1;
        `};
`;
export const ModalWrapper = styled.div`
    transform: translateX(-200%);
    width: 464px;
    background: #ffffff;
    border-radius: 4px;
    padding: 16px 16px;
    transition: 0.3s;
    will-change: transform;
    ${(props) =>
        props.open &&
        css`
            transform: translateX(0);
        `}
`;
