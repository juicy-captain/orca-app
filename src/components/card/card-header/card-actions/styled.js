import styled, { css } from "styled-components";

export const CardActionsSC = styled.div`
    display: none;
    position: absolute;
    padding: 1em 0.5em 0.5em;
    background: #ffffff;
    width: 4.75em;
    min-height: 4.75em;
    right: 6px;
    top: 0.5em;
    box-shadow: 0px 0px 0.625em rgba(0, 0, 0, 0.1);
    border-radius: 0.125em;
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
    top: 0.125em;
    right: 0.125em;
    cursor: pointer;
    &:hover {
        stroke: #0080ff;
        transition: 0.5s;
    }
`;
export const CardAction = styled.button`
    font-weight: 300;
    font-size: 0.625em;
    line-height: 0.75em;
    display: flex;
    color: #000;
    transition: 0.5s;
    padding: 0;
    border: 0;
    background: none;
    outline: none;
    cursor: pointer;

    &:not(:last-child) {
        margin-bottom: 0.5em;
    }
    & svg {
        width: 0.75em;
        height: 0.75em;
        margin-right: 0.25em;
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
