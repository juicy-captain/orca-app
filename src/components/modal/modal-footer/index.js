import { ModalFooterSC } from "./styled";
import { Button } from "../../../utils/helpers";
import PropTypes from "prop-types";

export const ModalFooter = ({ modalAction }) => {
    return (
        <ModalFooterSC>
            <Button buttonType="secondary" onClick={modalAction}>
                Cancel
            </Button>
            <Button buttonType="primary" onClick={modalAction}>
                Accept
            </Button>
        </ModalFooterSC>
    );
};

ModalFooter.propTypes = {
    modalAction: PropTypes.func,
};
