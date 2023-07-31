import { StyledWrapper, StyledMarkersWrapper, StyledNewMovie, StyledPageName } from "./styles";
import { Button, Header, Input, Marker, Section, Textarea } from '../../components/index';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export const NewMovie = () => {
  return (
    <>
      <Header />
      <StyledNewMovie>
        <Button 
          text="Voltar"
          icon={AiOutlineArrowLeft}
          isLink
          noBackground
          to="/"
        />
        <StyledPageName>
          Novo filme
        </StyledPageName>
        
        <StyledWrapper>
          <Input
            placeholder="Título"
            />
          <Input
            placeholder="Sua nota ( 0 a 5 )"
            type="number"
          />
        </StyledWrapper>
        <Textarea
          placeholder="Observações"
        />

        <Section
          title="Marcadores"
        >
          <StyledMarkersWrapper>
            <Marker
              name='Comédia'
            />
            <Marker
              name='Drama'
            />
            <Marker
              name='Ficção científica'
            />
            <Marker
              isEmpty
              name='Ficção científica'
            />
          </StyledMarkersWrapper>
        </Section>

        <StyledWrapper>
          <Button
            text="Excluir filme"
            invert
          />
          <Button
            text="Salvar alterações"
          />
        </StyledWrapper>

      </StyledNewMovie>
    </>
  );
}