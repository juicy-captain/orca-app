import { CardWrapper, OpenModalButton } from "./styled";

import CardHeader from "./card-header";
import CardContent from "./card-content";

const Card = ({ setModalOpen }) => {
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

export default Card;
