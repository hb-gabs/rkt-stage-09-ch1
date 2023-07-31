import { Button, Input } from "../../components"
import { StyledContent, StyledSignin, StyledBackground, StyledFormWrapper } from "./styles"
import { AiOutlineMail, AiFillLock } from "react-icons/ai";
import backgroundSign from '../../assets/background.svg';

export const Signin = () => {

  const handleSignin = e => {
    e.preventDefault();
  }

  return(
    <StyledSignin>
      <StyledContent>
        <StyledFormWrapper>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
          <h3>Faça seu login</h3>
          <form>
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
              text="Entrar"
              onClick={handleSignin}
            />
            <Button
              text="Criar conta"
              noBackground
              isLink
              className="btn"
              to="/signup"
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
    </StyledSignin>
  )
}