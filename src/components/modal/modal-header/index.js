import { ModalHeaderSC, ModalTitle, ModalClose } from "./styled";
import svg from "../../../assets/img/sprite.svg";
import PropTypes from "prop-types";

export const ModalHeader = ({ modalClose }) => {
    return (
        <ModalHeaderSC>
            <ModalTitle>Lorem ipsum dolor sit amet</ModalTitle>
            <ModalClose onClick={modalClose}>
                <use xlinkHref={svg + "#close"}></use>
            </ModalClose>
        </ModalHeaderSC>
    );
};

ModalClose.propTypes = {
    modalClose: PropTypes.func,
};
