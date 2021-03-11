import { CardActionsSC, CardActionsClose, CardAction } from "./styled";
import svg from "../../../../assets/img/sprite.svg";

const CardActions = ({ isOptionsOpened, optionToggle }) => {
    return (
        <CardActionsSC opened={isOptionsOpened}>
            <CardActionsClose width="11" height="11" onClick={optionToggle}>
                <use xlinkHref={svg + "#close"}></use>
            </CardActionsClose>
            <CardAction>
                <svg>
                    <use xlinkHref={svg + "#duplicate"}></use>
                </svg>
                Duplicate
            </CardAction>
            <CardAction>
                <svg>
                    <use xlinkHref={svg + "#edit"}></use>
                </svg>
                Edit
            </CardAction>
            <CardAction>
                <svg>
                    <use xlinkHref={svg + "#delete"}></use>
                </svg>
                Delete
            </CardAction>
        </CardActionsSC>
    );
};
export default CardActions;
