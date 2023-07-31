import { StyledInput, StyledInputContainer } from "./styles";
import { AiOutlineSearch } from 'react-icons/ai';

export const Input = ({
    type = 'text',
    placeholder = 'Digite algo',
    icon: Icon,
    ...rest
}) => {
    return (
        <StyledInputContainer {...rest}>
            {Icon && <Icon />}
            <StyledInput 
                type={type}
                placeholder={placeholder}
            />
        </StyledInputContainer>
    );
}