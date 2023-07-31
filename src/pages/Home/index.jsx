import { Button } from "../../components/Button";
import { GrAdd } from 'react-icons/gr';
import { Header } from "../../components/Header";
import { StyledContent, StyledContentBody, StyledContentHeader, StyledHeaderName } from "./styles";
import { Card } from "../../components/Card";

export const Home = () => {
    return (
        <>
            <Header />
            <StyledContent>
                <StyledContentHeader>
                    <StyledHeaderName>
                        Meus filmes
                    </StyledHeaderName>
                    <Button
                        text="Adicionar filme"
                        isLink
                        icon={GrAdd}
                        to="/movie/new"
                    />
                </StyledContentHeader>
                <StyledContentBody>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </StyledContentBody>
            </StyledContent>
        </>
    );
}