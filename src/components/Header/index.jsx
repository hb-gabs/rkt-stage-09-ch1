import { Input } from "../Input";
import { Profile } from "../Profile";
import { StyledHeader, StyledName } from "./styles";
import { AiOutlineSearch } from 'react-icons/ai';

export const Header = () => {
    return (
        <StyledHeader>
            <StyledName>
                RocketMovies
            </StyledName>
            <Input 
                placeholder='Pesquisar pelo título'
                icon={AiOutlineSearch}
            />
            <Profile />
        </StyledHeader>
    );
}