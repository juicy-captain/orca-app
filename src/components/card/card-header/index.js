import { useState } from "react";
import {
    CardHeaderSC,
    CardHeaderIcon,
    CardHeaderTitle,
    CardHeaderMore,
} from "./styled";
import CardActions from "./card-actions";
import svg from "../../../assets/img/sprite.svg";

const CardHeader = () => {
    const [isOptionsOpened, setOptionsOpened] = useState(false);
    return (
        <CardHeaderSC>
            <CardHeaderIcon width="18" height="18">
                <use xlinkHref={svg + "#caution"}></use>
            </CardHeaderIcon>
            <CardHeaderTitle>Data at risk</CardHeaderTitle>
            <CardHeaderMore
                width="3"
                height="12"
                onClick={() => setOptionsOpened(!isOptionsOpened)}
            >
                <svg>
                    <use xlinkHref={svg + "#dots"}></use>
                </svg>
            </CardHeaderMore>
            <CardActions
                isOptionsOpened={isOptionsOpened}
                optionToggle={() => setOptionsOpened(!isOptionsOpened)}
            />
        </CardHeaderSC>
    );
};

export default CardHeader;
