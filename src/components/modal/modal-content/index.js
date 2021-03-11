import { ModalContentSC, ModalText } from "./styled";

import CheckBox from "../../checkbox";
import { InputContainerRow } from "../../../utils/helpers";

const ModalContent = () => {
    const checkboxGroupOne = [
        {
            id: "list1",
            content: "Quisque tincidunt efficitur tempor",
        },
        {
            id: "list2",
            content: "Proin pellentesque dictum mauris sed lobortis",
        },
        {
            id: "list3",
            content: "Etiam nec mollis elit",
        },
    ];
    const checkboxGroupTwo = [
        {
            id: "list4",
            content: "Efficitur",
        },
        {
            id: "list5",
            content: "Lacinia",
        },
        {
            id: "list6",
            content: "Lacinia",
        },
    ];

    return (
        <ModalContentSC>
            <ModalText regular>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc gravida cursus nibh, sit amet varius purus lacinia at.
                    Quisque tincidunt efficitur tempor. Proin pellentesque
                    dictum mauris sed lobortis. Etiam nec mollis elit. Fusce et
                    lacus tincidunt sem commodo condimentum et id lectus.
                </p>
                <p>
                    Curabitur in pharetra ante. Aliquam in neque tristique,
                    fermentum elit dignissim, laoreet lacus. Praesent viverra
                    erat enim. Praesent quis ante rutrum, lacinia tortor ut,
                    efficitur dolor. Pellentesque vehicula tempus neque, ac
                    ornare libero tempor placerat.
                </p>
                <InputContainerRow column>
                    {checkboxGroupOne.map((el, i) => (
                        <CheckBox key={i + "list1"} connectId={el.id}>
                            {el.content}
                        </CheckBox>
                    ))}
                </InputContainerRow>
            </ModalText>
            <ModalText small>
                <p>
                    Curabitur in pharetra ante. Aliquam in neque tristique,
                    fermentum elit dignissim, laoreet lacus. Praesent viverra
                    erat enim. Praesent quis ante rutrum, lacinia tortor ut,
                    efficitur dolor. Pellentesque vehicula tempus neque, ac
                    ornare libero tempor placerat.
                </p>
                <p>
                    Curabitur in pharetra ante. Aliquam in neque tristique,
                    fermentum elit dignissim, laoreet lacus. Praesent viverra
                    erat enim. Praesent quis ante rutrum, lacinia tortor ut,
                    efficitur dolor. Pellentesque vehicula tempus neque, ac
                    ornare libero tempor placerat.
                </p>
                <InputContainerRow row>
                    {checkboxGroupTwo.map((el, i) => (
                        <CheckBox key={"list2" + i} connectId={el.id}>
                            {el.content}
                        </CheckBox>
                    ))}
                </InputContainerRow>
            </ModalText>
        </ModalContentSC>
    );
};

export default ModalContent;
