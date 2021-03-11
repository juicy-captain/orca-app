import styled from "styled-components";
export const CardContentSC = styled.div`
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 16px;
`;
export const CardRow = styled.div`
    display: flex;

    &:not(:last-child) {
        margin-bottom: 8px;
    }
`;

export const CardProperty = styled.span`
    margin-right: 8px;
    max-width: 36px;
    width: 100%;
`;
export const CardPropertyMultiRow = styled.div`
    overflow: hidden;
`;
export const CardPropertyMultiRowContent = styled.div`
    display: flex;

    &:not(:last-child) {
        margin-bottom: 4px;
    }
`;

export const CardPropertyTitle = styled.span`
    color: #70707b;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &:not(:last-child) {
        margin-right: 8px;
    }
`;

export const CardPropertyTestsCount = styled.span`
    color: black;
    flex: 1 0 auto;
`;
