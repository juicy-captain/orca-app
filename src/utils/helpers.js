import styled, { css } from "styled-components";
import { InputWrapper } from "../components/checkbox/styled";

export const InputContainerRow = styled.div`
    display: flex;

    ${(props) =>
        (props.row &&
            css`
                flex-direction: row;
                & ${InputWrapper} {
                    &:not(:last-child) {
                        margin-right: 1em;
                        margin-bottom: 0.5em;
                    }
                }
            `) ||
        (props.column &&
            css`
                flex-direction: column;
                & ${InputWrapper} {
                    &:not(:last-child) {
                        margin-bottom: 0.5em;
                    }
                }
            `)}
`;

const getButtonColor = (props) => {
    switch (props.buttonType) {
        case "primary":
            return css`
                background: #0080ff;
                color: #ffffff;
                border: 1px solid #0080ff;
                &:hover {
                    box-shadow: 0px 0px 0px 2px rgba(0, 128, 255, 0.2);
                    transition: 0.3s;
                }
            `;
        case "secondary":
            return css`
                border: 1px solid #70707b;
                background: #fff;
                color: #10111d;
                &:hover {
                    box-shadow: 0px 0px 0px 2px rgb(112 112 123 / 20%);
                    transition: 0.3s;
                }
            `;
        default:
            return css`
                background: #0080ff;
                color: #ffffff;
            `;
    }
};

export const Button = styled.button`
    border-radius: 2px;
    padding: 6px;
    border: 0;
    font-size: 0.625em;
    line-height: 0.75em;
    text-transform: uppercase;
    min-width: 100px;
    cursor: pointer;
    display: inline-block;
    transition: 0.3s;
    outline: none;
    ${(props) => getButtonColor(props)};
`;
