import { ModalOverlay, ModalWrapper } from "./styled";

import { useEffect, useRef } from "react";
import ModalHeader from "./modal-header";
import ModalContent from "./modal-content";
import ModalFooter from "./modal-footer";
import { useOnClickOutside } from "../../hooks/use-on-click-outside";

const Modal = ({ opened, setModalAction }) => {
    useEffect(() => {
        document.body.style.overflow = opened ? "hidden" : "";
    }, [opened]);

    const refModalWrapper = useRef(null);
    const modalClose = () => setModalAction(false);
    useOnClickOutside(refModalWrapper, modalClose);

    return (
        <ModalOverlay open={opened}>
            <ModalWrapper ref={refModalWrapper} open={opened}>
                <ModalHeader modalClose={modalClose} />
                <ModalContent />
                <ModalFooter modalAction={modalClose} />
            </ModalWrapper>
        </ModalOverlay>
    );
};

export default Modal;
