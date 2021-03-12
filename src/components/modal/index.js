import { useEffect, useRef } from "react";
import { ModalHeader } from "./modal-header";
import { ModalContent } from "./modal-content";
import { ModalFooter } from "./modal-footer";
import { useOnClickOutside } from "../../hooks/use-on-click-outside";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import { ModalOverlay, ModalWrapper, ModalContainer } from "./styled";

export const Modal = ({ opened, setModalAction }) => {
    useEffect(() => {
        document.body.style.overflow = opened ? "hidden" : "";
    }, [opened]);

    const refModalWrapper = useRef(null);
    useOnClickOutside(refModalWrapper, setModalAction);

    return (
        <ModalContainer>
            <CSSTransition
                in={opened}
                timeout={200}
                classNames="modal"
                unmountOnExit
                nodeRef={refModalWrapper}
            >
                <ModalOverlay>
                    <ModalWrapper ref={refModalWrapper} open={opened}>
                        <ModalHeader modalClose={setModalAction} />
                        <ModalContent />
                        <ModalFooter modalAction={setModalAction} />
                    </ModalWrapper>
                </ModalOverlay>
            </CSSTransition>
        </ModalContainer>
    );
};

Modal.propTypes = {
    opened: PropTypes.bool,
    setModalAction: PropTypes.func,
};
