import styled, { css } from "styled-components";

export const ModalContentSC = styled.div`
    border-bottom: 1px solid rgb(16 17 29 / 10%);
    margin-bottom: 16px;
`;

export const ModalText = styled.div`
    color: #000;
    margin-bottom: 16px;

    ${(props) =>
        props.regular
            ? css`
                  font-size: 12px;
                  line-height: 16px;
                  p {
                      margin-bottom: 16px;
                  }
              `
            : css`
                  font-size: 10px;
                  line-height: 14px;
                  p {
                      margin-bottom: 8px;
                  }
              `}
`;
