import { Button } from "../Button";
import { StyledMarker, StyledMarkerName } from "./styles";
import { RxCross2 } from 'react-icons/rx';
import { RiAddFill } from 'react-icons/ri';

export const Marker = ({
    name,
    isEmpty = false
}) => {
    return (
        <StyledMarker isEmpty={isEmpty}>
            <StyledMarkerName>
                {isEmpty ? "Novo marcador" : name}
            </StyledMarkerName>
            <Button
                text=""
                icon={isEmpty ? RiAddFill : RxCross2}
                noBackground   
            />
        </StyledMarker>
    );
}