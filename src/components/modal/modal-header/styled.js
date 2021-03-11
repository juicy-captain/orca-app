import styled from "styled-components";

export const ModalHeaderSC = styled.div`
    height: 43px;
    border-bottom: 1px solid rgb(16 17 29 / 10%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: -16px -16px 16px;
    padding: 16px;
`;
export const ModalTitle = styled.div`
    font-size: 18px;
    line-height: 27px;
`;
export const ModalClose = styled.svg`
    width: 11px;
    height: 11px;
    stroke: #70707b;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        stroke: #0080ff;
        transition: 0.3s;
    }
`;
