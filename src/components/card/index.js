import { CardHeader } from "./card-header";
import { CardContent } from "./card-content";
import PropTypes from "prop-types";
import { CardWrapper, OpenModalButton } from "./styled";

export const Card = ({ setModalOpen }) => {
    return (
        <CardWrapper>
            <CardHeader />
            <CardContent />
            <OpenModalButton buttonType="primary" onClick={setModalOpen}>
                Open modal
            </OpenModalButton>
        </CardWrapper>
    );
};

Card.propTypes = {
    setModalOpen: PropTypes.func,
};
