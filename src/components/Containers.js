import styled from 'styled-components';
export const HContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    & >* {
        margin-right:0.3rem;
        margin-bottom: 0.3rem;
    }
`;
export const VContainer = styled.div`
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
    & >* {
        margin-bottom: 0.3rem;
    }
`;