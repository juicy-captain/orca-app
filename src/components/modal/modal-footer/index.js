import { ModalFooterSC } from "./styled";
import { Button } from "../../../utils/helpers";

const ModalFooter = ({ modalAction }) => {
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

export default ModalFooter;
