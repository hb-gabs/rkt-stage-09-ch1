import { StyledCreationTime, StyledCreator, StyledDescription, StyledImage, StyledMovieTitle, StyledMovieView, StyledTagsWrapper, StyledWrapper } from "./styles";
import { Button, Header, Stars, Tag } from '../../components/index';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { CiClock2 } from 'react-icons/ci';
import profileImg from '../../assets/user-img.svg';

const mocked = {
  title: 'Interestelar',
  description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As "missões Lázaro" enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy.',
  creator: 'Rodrigo Gonçalves',
  dateTime: '23/05/23 às 08h00',
  tags: [
      {
          id: 0,
          name: 'Ficção científica',
      },
      {
          id: 1,
          name: 'Drama',
      },
      {
          id: 2,
          name: 'Familia',
      },
  ],
};

export const MovieView = ({
  data = mocked,
}) => {
  return (
    <>
      <Header />
      <StyledMovieView>
          <Button
            text="Voltar"
            icon={AiOutlineArrowLeft}
            noBackground
            isLink
            to="/"
          />

          <StyledWrapper>
            <StyledMovieTitle>
              {data.title}
            </StyledMovieTitle>
            <Stars
              rating={4}
              className="rating-stars"
            />
          </StyledWrapper>

          <StyledWrapper>
            <StyledImage
              src={profileImg}
            />
            <StyledCreator>
              Por {data.creator}
            </StyledCreator>
            <CiClock2 className="clock-icon" />
            <StyledCreationTime>
              {data.dateTime}
            </StyledCreationTime>
          </StyledWrapper>

            <StyledTagsWrapper>
              {data.tags?.map(tag => (
                <Tag name={tag.name} />
              ))}
            </StyledTagsWrapper>

            <StyledDescription>
              {data.description}
            </StyledDescription>
      </StyledMovieView>
    </>
  );
}