import styled from "styled-components";
import { Button } from "../../utils/helpers";

export const CardWrapper = styled.div`
    width: 270px;
    min-height: 190px;
    background: rgb(111 111 123 / 7%);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    padding: 16px;
`;

export const OpenModalButton = styled(Button)`
    display: block;
    margin-left: auto;
`;
