import React, { useState } from "react";
import { ContentWrapper, Logo } from "./styled";
import Card from "../card";
import Modal from "../modal";
import svg from "../../assets/img/sprite.svg";
function App() {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <ContentWrapper>
            <div>
                <Logo>
                    <use xlinkHref={svg + "#logo"}></use>
                </Logo>
                <Card setModalOpen={setModalOpen} />
                <Modal opened={isModalOpen} setModalAction={setModalOpen} />
            </div>
        </ContentWrapper>
    );
}

export default App;
