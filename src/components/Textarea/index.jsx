import { StyledTextarea } from "./styles";

export const Textarea = ({
    placeholder = 'Text area'
}) => {
    return (
        <StyledTextarea
            placeholder={placeholder}
        />
    );
}