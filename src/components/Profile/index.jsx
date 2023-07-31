import { StyledLogoutButton, StyledProfileContainer, StyledProfileText, StyledUserImage, StyledUserName } from "./styles";
import profileImg from '../../assets/user-img.svg';
import { Button } from "../Button";

export const Profile = () => {
    return (
        <StyledProfileContainer>
            <StyledProfileText>
                <StyledUserName>
                    <Button
                        text="Gabriel Marques"
                        noBackground
                        noPadding
                        isLink
                        style={{color: 'white'}}
                        to="/profile"
                    />
                </StyledUserName>
                <StyledLogoutButton>
                    sair
                </StyledLogoutButton>
            </StyledProfileText>
            <StyledUserImage
                src={profileImg}
                alt="Foto de perfil"
            />
        </StyledProfileContainer>
    );
}