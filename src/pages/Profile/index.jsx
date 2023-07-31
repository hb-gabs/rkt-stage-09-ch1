import { StyledForm, StyledHeader, StyledImage, StyledImageWrapper, StyledInputWrapper, StyledProfile } from "./styles";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Button, Input } from '../../components/index';
import profileImg from '../../assets/user-img.svg';
import { MdPhotoCamera } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineMail, AiFillLock } from "react-icons/ai";

export const Profile = () => {
    return (
        <StyledProfile>
            <StyledHeader>
                <Button
                    text='Voltar'
                    icon={AiOutlineArrowLeft}
                    isLink
                    to="/"
                    noBackground
                />
            </StyledHeader>
            <StyledImageWrapper>
                <StyledImage
                    src={profileImg}
                />
                <StyledInputWrapper>
                    <Input
                        icon={MdPhotoCamera}
                        placeholder=""
                        type="file"
                        className="photo-input"
                    />
                </StyledInputWrapper>
            </StyledImageWrapper>
            <StyledForm>
                <Input
                    icon={CgProfile}
                    placeholder="Nome"
                    type="text"
                />
                <Input
                    icon={AiOutlineMail}
                    placeholder="Email"
                    type="text"
                />
                <Input
                    icon={AiFillLock}
                    placeholder="Senha atual"
                    type="passsword"
                />
                <Input
                    icon={AiFillLock}
                    placeholder="Nova senha"
                    type="password"
                />
                <Button
                    text="Salvar"
                />
            </StyledForm>
        </StyledProfile>
    );
}