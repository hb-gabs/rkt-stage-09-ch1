import styled from 'styled-components';

export const StyledContent = styled.main`
    padding: 2rem 10rem;
    display: grid;
    gap: 1rem;
    height: calc(100vh - 100px);
    grid-template-areas:
    "header"
    "body";
    overflow: hidden;
`;
    
export const StyledContentHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    grid-area: header;
`;

export const StyledHeaderName = styled.h1`
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primaryTextColor};
    font-size: 2rem;
`;

export const StyledContentBody = styled.div`
    overflow-y: auto;
    grid-area: body;

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        background: none;
    }

    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.primary};
        border-radius: 1rem;
    }
`;