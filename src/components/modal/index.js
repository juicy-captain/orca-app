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

    useOnClickOutside(refModalWrapper, () => setModalAction(false));

    return (
        <ModalOverlay open={opened}>
            <ModalWrapper ref={refModalWrapper} open={opened}>
                <ModalHeader modalClose={() => setModalAction(false)} />
                <ModalContent />
                <ModalFooter modalAction={() => setModalAction(false)} />
            </ModalWrapper>
        </ModalOverlay>
    );
};

export default Modal;
