import styled from 'styled-components';

const SectionTitle = styled.div`
    
    ${props => props.rotate?
    `writing-mode: vertical-rl;
    transform: rotate(180deg);` 
    : 
    null}   
    width: 100%;
    height: 100%;
    background-color: rgba(144,148,156, 1);
    color: white;
    border-radius: 0.3rem;
    align-self: center;
    justify-self: center;
    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction: row;
    h2{
        padding: 0.5rem;
        margin: 0;
        text-align: center;
    }
`;

export default SectionTitle;