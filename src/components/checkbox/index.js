import { Label, InputCheckBox, InputWrapper } from "./styled";

const CheckBox = ({ connectId, children }) => {
    return (
        <InputWrapper>
            <InputCheckBox id={connectId} />
            <Label htmlFor={connectId}>{children}</Label>
        </InputWrapper>
    );
};

export default CheckBox;
