import { Button, Input } from "../../components"
import { StyledContent, StyledSignup, StyledBackground, StyledFormWrapper } from "./styles"
import { AiOutlineMail, AiFillLock } from "react-icons/ai";
import backgroundSign from '../../assets/background.svg';
import { CgProfile } from 'react-icons/cg';
import { Link } from "react-router-dom";

export const Signup = () => {

  const handleSignin = e => {
    e.preventDefault();
  }

  return(
    <StyledSignup>
      <StyledContent>
        <StyledFormWrapper>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h3>Crie sua conta</h3>
        <form>
          <Input
            placeholder="Nome"
            type="text"
            icon={CgProfile}
          />
          <Input
            placeholder="Email"
            type="text"
            icon={AiOutlineMail}
          />
          <Input
            placeholder="Senha"
            type="password"
            icon={AiFillLock}
          />
          <Button
            className="btn"
            text="Cadastrar"
            onClick={handleSignin}
          />
          <Button
            text="Voltar para o login"
            noBackground
            className="btn"
            isLink
            to="/signin"
          />
        </form>
        </StyledFormWrapper>
      </StyledContent>
      <StyledBackground>
        <img
          src={backgroundSign}
          alt="Imagem do espaço interno de um a sala de cinema."
        />
      </StyledBackground>
    </StyledSignup>
  )
}