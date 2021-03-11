import styled, { css } from "styled-components";

export const CardActionsSC = styled.div`
    display: none;
    position: absolute;
    padding: 16px 8px 8px;
    background: #ffffff;
    width: 76px;
    min-height: 76px;
    right: 6px;
    top: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    font-weight: 300;

    ${(props) =>
        props.opened &&
        css`
            display: block;
        `}
`;
export const CardActionsClose = styled.svg`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    stroke: #70707b;
    transition: 0.5s;
    position: absolute;
    top: 2px;
    right: 2px;
    cursor: pointer;
    &:hover {
        stroke: #0080ff;
        transition: 0.5s;
    }
`;
export const CardAction = styled.button`
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;
    display: flex;
    color: #000;
    transition: 0.5s;
    padding: 0;
    border: 0;
    background: none;
    outline: none;
    cursor: pointer;

    &:not(:last-child) {
        margin-bottom: 8px;
    }
    & svg {
        width: 12px;
        height: 12px;
        margin-right: 4px;
        fill: #70707b;
    }

    &:hover {
        color: #0080ff;
        transition: 0.5s;

        & svg {
            transition: 0.5s;
            fill: #0080ff;
        }
    }
`;
