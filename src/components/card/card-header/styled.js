import styled from "styled-components";
import cardBg from "../../../assets/img/cardHeader.svg";

export const CardHeaderSC = styled.div`
    position: relative;
    height: 34px;
    background: url(${cardBg}) no-repeat center/cover;
    font-size: 14px;
    line-height: 16px;
    margin: -16px -16px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 12px;
    border-radius: 4px 4px 0 0;
`;
export const CardHeaderTitle = styled.span`
    margin-left: 58px;
    margin-right: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;
export const CardHeaderIcon = styled.svg`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    position: absolute;
    top: 8px;
    left: 8px;
`;
export const CardHeaderMore = styled.button`
    margin: 0 0 0 auto;
    cursor: pointer;
    padding: 0;
    border: 0;
    background: none;
    fill: #70707b;
    outline: none;
    & svg {
        width: ${(props) => props.width}px;
        height: ${(props) => props.height}px;
        transition: 0.5s;
    }
    &:hover svg {
        fill: #0080ff;
        transition: 0.5s;
    }
`;
