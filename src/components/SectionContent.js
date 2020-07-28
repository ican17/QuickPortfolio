import styled from 'styled-components';

const SectionContent =  styled.div`
    display: flex;
    background-color: rgba(245,245,245, 1);
    border-radius: 0.3rem;
    padding: .5rem;
    overflow: auto;
    flex-direction: ${props => props.flexDir === "column"? "column" : "row"};
    justify-content: ${props => props.justifyContent ? props.justifyContent : "normal"};
    align-items: ${props => props.alignItems ? props.alignItems : "normal"};
    flex-wrap: ${props => props.wrapping ? props.wrapping : "nowrap"};
    ${props => props.flexDir !== "column"? 
    `
    & >* {
        margin-right:0.3rem;
        margin-bottom: 0.3rem;
    }
    `
    : null}

`;

export default SectionContent;