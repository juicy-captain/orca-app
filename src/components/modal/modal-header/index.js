import { ModalHeaderSC, ModalTitle, ModalClose } from "./styled";
import svg from "../../../assets/img/sprite.svg";
const ModalHeader = ({ modalClose }) => {
    return (
        <ModalHeaderSC>
            <ModalTitle>Lorem ipsum dolor sit amet</ModalTitle>
            <ModalClose onClick={modalClose}>
                <use xlinkHref={svg + "#close"}></use>
            </ModalClose>
        </ModalHeaderSC>
    );
};

export default ModalHeader;
